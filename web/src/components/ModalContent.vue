<template>
    <div>
        <b-container fluid>
            <b-row>
              <b-col>
                <b-row>
                  <ColumnChart :data="columnData" :options="columnOptions" />
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
// import bus from "../config/events/bus";

import ColumnChart from "./charts/Column";
// import CoreChart from "./charts/BubbleChart";
// import Treemap from "./charts/Treemap";

import MunicipioService from "../services/MunicipioService";
import DadosCensoService from "../services/DadosCensoService";

export default {
    name: "ModalContent",
    components: {
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
            columnData: [],
            columnOptions: {
              title: "Comparativo por Região"
            },
            dadosMicrorregiao: [],
            dadosMesorregiao: []
        }
    },

    async created() {
      if(this.cidade != null){
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
        this.loading = false
      }
    },

    methods: {
      async loadCidadesMicrorregiao(microrregiao) {
        this.loading = true
        let params = {
          microrregiao: microrregiao
        }
        return await MunicipioService.listar(params)
      },

      async loadCidadesMesorregiao(mesorregiao) {
        this.loading = true
        let params = {
          mesorregiao: mesorregiao
        }
        return await MunicipioService.listar(params)
      },

      async loadDados(cidades) {
        try {
          let totalFederal = 0
          let totalEstadual = 0
          let totalMunicipal = 0
          let totalPrivada = 0
        
          const pCidade = cidades.map( async (cidade) => {
            let params = {
              municipio: cidade._id
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