<template>
    <div>
        <loading :active.sync="loading" :is-full-page="fullpage"></loading>
        <b-container fluid>
            <b-row>
              <b-col>
                <b-row class="charts">
                  <ColumnChart ref="column-chart" :data="columnData" :options="columnOptions" />
                </b-row>
                <b-row class="charts">
                  <br />
                  <BarChart :data="barData" :options="barOptions" />
                </b-row>
              </b-col>
              <b-col>
                <!-- Treemap / -->
              </b-col>
            </b-row>  
          </b-container>
    </div>
</template>

<script>
import Loading from 'vue-loading-overlay';
// import bus from "../config/events/bus";

import ColumnChart from "./charts/Column";
import BarChart from "./charts/Bar";
// import CoreChart from "./charts/BubbleChart";
// import Treemap from "./charts/Treemap";

import MunicipioService from "../services/MunicipioService";
import DadosCensoService from "../services/DadosCensoService";

export default {
    name: "ModalContent",
    components: {
      Loading,
      ColumnChart,
      BarChart /*,
      CoreChart,
      Treemap */
    },
    props: {
      cidade: Object
    },
    data() {
      return {
        loading: false,
        fullpage: true,
        columnData: [],
        columnOptions: {},
        radialData: [76, 67, 61, 90],
        radialOptions: {},
        barData: [],
        barOptions: {}
      }
    },

    async created() {
      if(this.cidade != null) {
        this.loadColumnChart()
        this.loadBarChart()
      }
    },

    methods: {

      async loadBarChart(){
        let dataCidade = []
        let dataMicrorregiao = []
        let dataMesorregiao = []

        this.loading = true

        let cidades = []
        cidades.push(this.cidade)

        const cidade = await this.loadDados(cidades)

        const cidadesMicrorregiao = await this.loadCidadesMicrorregiao(this.cidade.microrregiao)
        const dadosMicrorregiao = await this.loadDados(cidadesMicrorregiao.data)
        
        const cidadesMesorregiao = await this.loadCidadesMesorregiao(this.cidade.mesorregiao)
        const dadosMesorregiao = await this.loadDados(cidadesMesorregiao.data)

        dataCidade.push(this.cidade.nome)
        dataCidade.push(cidade.urbana)
        dataCidade.push(cidade.rural)

        dataMicrorregiao.push("Microrregião")
        dataMicrorregiao.push(dadosMicrorregiao.urbana)
        dataMicrorregiao.push(dadosMicrorregiao.rural)

        dataMesorregiao.push("Mesorregião")
        dataMesorregiao.push(dadosMesorregiao.urbana)
        dataMesorregiao.push(dadosMesorregiao.rural)
        
        this.barData = [
          ["Região", "Urbana", "Rural"],
          dataCidade,
          dataMicrorregiao,
          dataMesorregiao
        ]

        this.barOptions = {
          title: "Localização Escolar",
          legend: { position: 'bottom', maxLines: 3 },
          style: 'text-align: center',
          minColor: '#f00',
          midColor: '#ddd',
          maxColor: '#0d0',
          headerHeight: 15,
          fontColor: 'black',
          showScale: true
        }
        this.loading = false
      },

      async loadRadialChart() {

      },

      async loadColumnChart() {
        this.loading = true

        let dataMicrorregiao = []
        let dataMesorregiao = []

        const cidadesMicrorregiao = await this.loadCidadesMicrorregiao(this.cidade.microrregiao)
        const dadosMicrorregiao = await this.loadDados(cidadesMicrorregiao.data)
        
        const cidadesMesorregiao = await this.loadCidadesMesorregiao(this.cidade.mesorregiao)
        const dadosMesorregiao = await this.loadDados(cidadesMesorregiao.data)

        dataMicrorregiao.push("Microrregião")
        dataMicrorregiao.push(dadosMicrorregiao.federal)
        dataMicrorregiao.push(dadosMicrorregiao.estadual)
        dataMicrorregiao.push(dadosMicrorregiao.municipal)
        dataMicrorregiao.push(dadosMicrorregiao.privada)

        dataMesorregiao.push("Mesorregião")
        dataMesorregiao.push(dadosMesorregiao.federal)
        dataMesorregiao.push(dadosMesorregiao.estadual)
        dataMesorregiao.push(dadosMesorregiao.municipal)
        dataMesorregiao.push(dadosMesorregiao.privada)
        
        this.columnData = [
          ["Região", "Federal", "Estadual", "Municipal", "Privada"],
          dataMicrorregiao,
          dataMesorregiao
        ]

        this.columnOptions = {
          title: "Comparativo por Região",
          legend: { position: 'bottom', maxLines: 3 },
          style: 'text-align: center'
        }

        this.loading = false
      },

      async loadCidadesMicrorregiao(microrregiao) {
        let params = {
          microrregiao: microrregiao
        }
        const result = await MunicipioService.listar(params)
        return result
      },

      async loadCidadesMesorregiao(mesorregiao) {
        let params = {
          mesorregiao: mesorregiao
        }
        const result = await MunicipioService.listar(params)
        return result
      },

      async loadDados(cidades) {
        try {
          let totalFederal = 0
          let totalEstadual = 0
          let totalMunicipal = 0
          let totalPrivada = 0
          let totalUrbana = 0
          let totalRural = 0
        
          const pCidade = cidades.map( async (cidade) => {
            let params = {
              municipio: cidade._id,
              ano: 2018
            }
            await DadosCensoService.listar(params)
            .then(async (response) => {
              await response.data.forEach(dado => {
                totalFederal += dado.federal,
                totalEstadual += dado.estadual,
                totalMunicipal += dado.municipal,
                totalPrivada += dado.privada,
                totalUrbana += dado.urbana
                totalRural += dado.rural
              })
            })
          })

          await Promise.all(pCidade);
          // eslint-disable-next-line
          console.log("ERROR: " + totalFederal);
          return {
            federal: totalFederal,
            estadual: totalEstadual,
            municipal: totalMunicipal,
            privada: totalPrivada,
            urbana: totalUrbana,
            rural: totalRural
          }
        } catch (e) {
          // eslint-disable-next-line
          console.error("ERROR: " + e);
        }  
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
    .charts {
      margin: 0 auto
    }

</style>