<template>
  <div id="map">
    <loading :active.sync="loading" :is-full-page="fullpage"></loading>
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
        v-b-modal.modal-dashboard
        @click="loadDashCidade(item)"
      >
      </l-marker>      
      <b-modal ref="modal-dashboard" size="xl" id="modal-dashboard">
        <template v-slot:modal-header>
          <ModalHeader 
            :cidade="cidade"
            :qtdTotalEscolas="qtdTotalEscolas" 
            :qtdTotalFederal="qtdTotalFederal"  
            :qtdTotalEstadual="qtdTotalEstadual"
            :qtdTotalMunicipal="qtdTotalMunicipal"
            :qtdTotalPrivada="qtdTotalPrivada"
          />
        </template>
        <ModalContent 
          :cidade="cidade"
        />
        <template v-slot:modal-footer>
          <div class="w-100">
            <b-button
              variant="primary"
              size="sm"
              class="float-right"
              @click="closeModal()"
            >
              Fechar
            </b-button>
          </div>
        </template>
      </b-modal>
      <l-geo-json v-if="show" :geojson="geojson" :options="options" :options-style="styleFunction" />
    </l-map>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay';

import { latLng } from "leaflet";
import { LMap, LTileLayer, LGeoJson, LMarker } from "vue2-leaflet";

import bus from "../config/events/bus";

import ModalHeader from "./ModalHeader";
import ModalContent from "./ModalContent";
import MunicipioService from "../services/MunicipioService";
import DadosCensoService from "../services/DadosCensoService";

export default {
  name: "SimpleMap",
  components: {
    Loading,
    LMap,
    LTileLayer,
    LGeoJson,
    LMarker,
    ModalHeader,
    ModalContent
  },

  data() {
    return {
      loading: false,
      fullpage: true,
      zoom: 10,
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
      qtdTotalEscolas: 0,
      qtdTotalFederal: 0,
      qtdTotalEstadual: 0,
      qtdTotalMunicipal: 0,
      qtdTotalPrivada: 0,
      cidade: null
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
      this.loading = true
      //this.center = latLng(cidade.latitude, cidade.longitude);
      //this.currentCenter = latLng(cidade.latitude, cidade.longitude);
  
      let params = {
          municipio: cidade._id,
          ano: new Date().getFullYear() - 1
      }

      DadosCensoService.listar(params)
      .then( response => {
          this.qtdTotalEscolas = response.data[0].count
          this.qtdTotalFederal = response.data[0].federal
          this.qtdTotalEstadual = response.data[0].estadual
          this.qtdTotalMunicipal = response.data[0].municipal
          this.qtdTotalPrivada = response.data[0].privada
          this.cidade = cidade

          setTimeout(() => {
            this.$refs['modal-dashboard'].show()
          })
      }).catch(e => {
          // eslint-disable-next-line
          console.error("ERROR: " + e);
      }).finally(() => {
          this.loading = false
      })
    },

    listarCidades() {            
      this.loading = true
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

    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },

    centerUpdate(center) {
      this.currentCenter = center;
    },

    showLongText() {
      this.showParagraph = !this.showParagraph;
    },

    closeModal() {
      this.$refs['modal-dashboard'].hide()
    }
  }
};
</script>

<style>

</style>