<template>
    <div>
        <loading :active.sync="loading" :is-full-page="fullpage"></loading>
        <b-container fluid>
            <b-row>
              <b-col>
                <b-row>
                  <ColumnChart ref="column-chart" :data="columnData" :options="columnOptions" />
                </b-row>
                <b-row>
                  <!-- CoreChart / -->
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
// import CoreChart from "./charts/BubbleChart";
// import Treemap from "./charts/Treemap";

import MunicipioService from "../services/MunicipioService";
import DadosCensoService from "../services/DadosCensoService";

export default {
    name: "ModalContent",
    components: {
      Loading,
      ColumnChart /*,
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
            dadosMicrorregiao: [],
            dadosMesorregiao: []
        }
    },

    async created() {
      if(this.cidade != null){
        this.loadColumnChart()
      }
    },

    methods: {

      async loadColumnChart(){
        this.loading = true
        const cidadesMicrorregiao = await this.loadCidadesMicrorregiao(this.cidade.microrregiao)
        const dadosMicrorregiao = await this.loadDados(cidadesMicrorregiao.data)
        
        const cidadesMesorregiao = await this.loadCidadesMesorregiao(this.cidade.mesorregiao)
        const dadosMesorregiao = await this.loadDados(cidadesMesorregiao.data)

        this.dadosMicrorregiao.push("Microrregião")
        this.dadosMicrorregiao.push(dadosMicrorregiao.federal)
        this.dadosMicrorregiao.push(dadosMicrorregiao.estadual)
        this.dadosMicrorregiao.push(dadosMicrorregiao.municipal)
        this.dadosMicrorregiao.push(dadosMicrorregiao.privada)

        this.dadosMesorregiao.push("Mesorregião")
        this.dadosMesorregiao.push(dadosMesorregiao.federal)
        this.dadosMesorregiao.push(dadosMesorregiao.estadual)
        this.dadosMesorregiao.push(dadosMesorregiao.municipal)
        this.dadosMesorregiao.push(dadosMesorregiao.privada)
        
        this.columnData = [
          ["Região", "Federal", "Estadual", "Municipal", "Privada"],
          this.dadosMicrorregiao,
          this.dadosMesorregiao
        ]
        this.columnOptions = {
          title: "Comparativo por Região"
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
                totalPrivada += dado.privada
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
            privada: totalPrivada
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

</style>