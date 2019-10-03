<template>
  <div id="map">
    <l-map
      v-if="showMap"
      :zoom="zoom"
      :center="center"
      style="height: 100%"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate"
    >
      <l-tile-layer :url="url" :attribution="attribution" />
      <l-marker
        v-for="item in municipios"
        v-bind:key="item._id"
        :lat-lng="[item.latitude, item.longitude]"
        @click="loadDashCidade(item)"
      >
        <l-popup>
          <b-container fluid>
            <b-row>
                <b-col>
                  <h3>{{ cidade.nome }} ({{ qtdTotalEscolas }})</h3>
                </b-col>
                <b-col>
                  <b-form-select v-model="anoSelecionado" :options="anoFiltro" class="selectAno" @change="loadGraficos(cidade, anoSelecionado)"></b-form-select>
                </b-col>
                <b-col>
                  <div class="areaBtnRegioes">
                      <b-badge variant="success">Federal ({{ qtdTotalFederal }}) </b-badge>
                      <b-badge variant="warning">Estadual ({{ qtdTotalEstadual }}) </b-badge>
                      <b-badge variant="info">Municipal ({{ qtdTotalMunicipal }}) </b-badge>
                      <b-badge variant="danger">Privada ({{ qtdTotalPrivada }}) </b-badge>
                  </div>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b-progress class="mt-2" :max="max" show-value>
                      <b-progress-bar :value="(qtdTotalFederal * max)/qtdTotalEscolas" variant="success"></b-progress-bar>
                      <b-progress-bar :value="(qtdTotalEstadual * max)/qtdTotalEscolas" variant="warning"></b-progress-bar>
                      <b-progress-bar :value="(qtdTotalMunicipal * max)/qtdTotalEscolas" variant="info"></b-progress-bar>
                      <b-progress-bar :value="(qtdTotalPrivada * max)/qtdTotalEscolas" variant="danger"></b-progress-bar>
                    </b-progress>    
                </b-col>
            </b-row> 
            <b-row>
              <b-col>
                <b-row>
                  <ColumnChart />
                </b-row>
                <b-row>
                  <CoreChart />
                </b-row>
              </b-col>
              <b-col>
                <Treemap />
              </b-col>
            </b-row>  
          </b-container>
        </l-popup>
      </l-marker>
      <l-geo-json v-if="show" :geojson="geojson" :options="options" :options-style="styleFunction" />
    </l-map>
  </div>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LGeoJson, LPopup, LMarker } from "vue2-leaflet";
import MunicipioService from "../services/MunicipioService";
import EscolaService from "../services/EscolaService";
import CensoService from "../services/CensoService";
import bus from "../config/events/bus";
import osm from "../config/service/osmauth";
import ColumnChart from "./charts/Column";
import CoreChart from "./charts/BubbleChart";
import Treemap from "./charts/Treemap";

export default {
  name: "SimpleMap",
  components: {
    LMap,
    LTileLayer,
    LGeoJson,
    LMarker,
    LPopup,
    ColumnChart,
    CoreChart,
    Treemap
  },

  data() {
    return {
      zoom: 10,
      loading: false,
      show: true,
      center: latLng(-12.96214, -38.50045),
      geojson: [],
      fillColor: "#e4ce7f",
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      currentZoom: 10,
      currentCenter: latLng(-12.96214, -38.50045),
      showParagraph: true,
      mapOptions: {
        zoomSnap: 0.5
      },
      showMap: true,
      municipios: [],
      cidade: Object,
      qtdTotalEscolas: 0,
      qtdTotalFederal: 0,
      qtdTotalEstadual: 0,
      qtdTotalMunicipal: 0,
      qtdTotalPrivada: 0,
      max: 100,
      estadoSelecionado: "",
      anoSelecionado: '2018',
      anoFiltro: [
        { value: '2018', text: '2018'},
        { value: '2017', text: '2017'},
        { value: '2016', text: '2016'},
        { value: '2015', text: '2015'},
        { value: '2014', text: '2014'}
      ]
    };
  },

  computed: {
    options() {
      return {
        onEachFeature: this.onEachFeatureFunction
      };
    },

    styleFunction() {
      const fillColor = this.fillColor; // important! need touch fillColor in computed for re-calculate when change fillColor
      return () => {
        return {
          weight: 2,
          color: "#ECEFF1",
          opacity: 1,
          fillColor: fillColor,
          fillOpacity: 1
        };
      };
    }
  },

  created() {
    this.loading = true;
    let vm = this;
    bus.$on("submit", function(estado, tipoMapa) {
      vm.estadoSelecionado = estado;
      if (tipoMapa == "mesorregiao") {
        vm.listarMesorregiao();
      }
      if (tipoMapa == "microrregiao") {
        vm.listarMicrorregiao();
      }
      if (tipoMapa == "cidade") {
        vm.listarCidades();
      }
    });
  },

  methods: {
    loadDashCidade(cidade) {
      this.center = latLng(cidade.latitude, cidade.longitude);
      this.currentCenter = latLng(cidade.latitude, cidade.longitude);

      this.loadGraficos(cidade, this.anoSelecionado);

      // bus.$emit("loadCidade", cidade);
    },

    loadGraficos(cidade, anoSelecionado){
      this.qtdTotalEscolas = 0
      this.qtdTotalFederal = 0
      this.qtdTotalEstadual = 0
      this.qtdTotalMunicipal = 0
      this.qtdTotalPrivada = 0
      MunicipioService.get(cidade._id)
        .then(response => {
          response.data.forEach( municipio => {
            let paramsEscola = {
              municipio_id: municipio._id
            }

            EscolaService.listar(paramsEscola)
              .then(response => {
                
                response.data.forEach(escola => {
                  let codEdidade = escola._id

                  let params = {
                    NU_ANO_CENSO: parseInt(anoSelecionado),
                    TP_SITUACAO_FUNCIONAMENTO: 1,
                    CO_ENTIDADE: codEdidade
                  }
                  
                  CensoService.listar(params)
                    .then(response => {

                      response.data.forEach(censo => {
                          
                          if(censo.TP_DEPENDENCIA === 1){ this.qtdTotalFederal++ }
                          if(censo.TP_DEPENDENCIA === 2){ this.qtdTotalEstadual++ }
                          if(censo.TP_DEPENDENCIA === 3){ this.qtdTotalMunicipal++ }
                          if(censo.TP_DEPENDENCIA === 4){ this.qtdTotalPrivada++ }
                      })   
                      this.qtdTotalEscolas = this.qtdTotalFederal + this.qtdTotalEstadual + this.qtdTotalMunicipal + this.qtdTotalPrivada
                      this.cidade = cidade                       
                    })
                    .catch(e => {
                      // eslint-disable-next-line
                      console.error("ERROR: " + e);
                    }).finally(() => this.loading = false);
                })
              }).catch(e => {
                // eslint-disable-next-line
                console.error("ERROR: " + e);
              }).finally(() => this.loading = false)
            
          })
        }).catch(e => {
          // eslint-disable-next-line
          console.error("ERROR: " + e);
        }).finally(() => this.loading = false)
    },

    listarCidades() {
      let params = {
        estado: this.estadoSelecionado
      };
      MunicipioService.listar(params)
        .then(response => {
          this.municipios = response.data;
        })
        .catch(e => {
          // eslint-disable-next-line
          console.error(e);
        }).finally(() => this.loading = false);
    },

    listarMesorregiao() {
      let params = {
        estado: this.estadoSelecionado
      };
      MunicipioService.listar(params)
        .then(response => {
          let mesorregiaoList = [];
          response.data.forEach(element => {
            mesorregiaoList.push("Mesorregião " + element.mesorregiao);
          });
          mesorregiaoList = Array.from(new Set(mesorregiaoList));

          mesorregiaoList.forEach(mesorregiao => {
            // eslint-disable-next-line
            console.log(mesorregiao);
            osm
              .get("&q=" + mesorregiao + "&polygon_geojson=1&format=json")
              .then(response => {
                //mesorregiao.geojson = response.data
                // eslint-disable-next-line
                console.log(response.data);
              })
              .catch(e => {
                // eslint-disable-next-line
                console.error(e);
              }).finally(() => this.loading = false);
          });
        })
        .catch(e => {
          // eslint-disable-next-line
          console.error(e);
        });
      // this.geojson = this.municipios.geojson
    },

    listarMicrorregiao() {
      let params = {
        estado: this.estadoSelecionado
      };
      MunicipioService.listar(params)
        .then(response => {
          let microrregiaoList = [];
          response.data.forEach(element => {
            microrregiaoList.push("Microrregião " + element.microrregiao);
          });
          microrregiaoList = Array.from(new Set(microrregiaoList));
          // eslint-disable-next-line
          console.log(microrregiaoList);
        })
        .catch(e => {
          // eslint-disable-next-line
          console.error(e);
        }).finally(() => this.loading = false);
      // this.geojson = this.municipios.geojson
    },

    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },

    centerUpdate(center) {
      this.currentCenter = center;
    },

    showLongText() {
      this.showParagraph = !this.showParagraph;
    }
  }
};
</script>

<style>

    .container {
        width: 100%;
        padding-right: 15px !important;
        padding-left: 15px !important;
        margin-right: auto !important;
        margin-left: auto !important;
    }
    
    .areaBtnRegioes {
        text-align: right;
    }

    .btnRegioes {
        margin-right: 2px;
    }

    .selectAno {
      width: 1vh;
    }

</style>