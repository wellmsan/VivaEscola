<template>
  <div>
    <GChart type="ColumnChart" :data="data" />
  </div>
</template>
<script>
import bus from "../../config/events/bus";
import { GChart } from "vue-google-charts";
import DadosCensoService from "../../services/DadosCensoService";

export default {
  name: "ColumnChart",
  components: {
    GChart
  },

  data() {
    return {
      loading: false,
      data: [],
      cidadesMicrorregiao: [],
      cidadesMesorregiao: []
    };
  },

  created() {
    let vm = this;
    bus.$on("cidadesMicrorregiao", function(microrregioes) {
      vm.cidadesMicrorregiao = vm.loadDados(1, microrregioes)
    })
    bus.$on("cidadesMisorregiao", function(mesorregioes) {
      vm.cidadesMesorregiao = vm.loadDados(2, mesorregioes)
    })

    this.data = [
      ["Região", "Federal", "Estadual", "Municipal", "Privada"],
      this.cidadesMicrorregiao,
      this.cidadesMesorregiao
    ]     
    
  },

  methods: {
    async loadDadosCenso(cidadeId){
      try {
        let totalFederal = 0
        let totalEstadual = 0
        let totalMunicipal = 0
        let totalPrivada = 0
        let params = {
          municipio: cidadeId
        }
        await DadosCensoService.listar(params)
        .then(response => {
          response.data.map(dados => {
            // eslint-disable-next-line
            console.log("FEDERAL2: " + dados);
            totalFederal = dados.qtdTotalFederal,
            totalEstadual = dados.qtdTotalEstadual,
            totalMunicipal = dados.qtdTotalMunicipal,
            totalPrivada = dados.qtdTotalPrivada
          })
        }).catch(e => {
            // eslint-disable-next-line
            console.error("ERROR: " + e);
        })
        return {
          totalFederal: totalFederal,
          totalEstadual: totalFederal,
          totalMunicipal: totalFederal,
          totalPrivada: totalFederal,
        }
      } catch(e) {
        // eslint-disable-next-line
        console.error("ERROR: " + e);
      }
    },

    async loadDados(tipo, cidades) {
      let totalFederal = 0
      let totalEstadual = 0
      let totalMunicipal = 0
      let totalPrivada = 0
      let dadosLista = []

      if(tipo == 1) {
        
        await cidades.map(cidade => {
          let result = this.loadDadosCenso(cidade._id)
          // eslint-disable-next-line
          console.log("TOOOOOT: " + result.totalFederal);
          totalFederal += result.totalFederal
          totalEstadual += result.totalFederal
          totalMunicipal += result.totalFederal
          totalPrivada += result.totalFederal
        })

        dadosLista.push("Microrregião")
        dadosLista.push(totalEstadual)
        dadosLista.push(totalEstadual)
        dadosLista.push(totalMunicipal)
        dadosLista.push(totalPrivada)
        // eslint-disable-next-line
        console.log("TOTAL: " + dadosLista);
        return dadosLista  
      }

      if(tipo == 2) {
        cidades.map(cidade => {

          let params = {
            cidade: cidade._id
          }

          DadosCensoService.listar(params)
          .then(responseDados => {

            responseDados.data.map(dados => {
              // eslint-disable-next-line
              console.log("ERROR: " + dados);
              totalFederal += dados.qtdTotalFederal,
              totalEstadual += dados.qtdTotalEstadual,
              totalMunicipal += dados.qtdTotalMunicipal,
              totalPrivada += dados.qtdTotalPrivada
            })
          }).catch(e => {
            // eslint-disable-next-line
            console.error("ERROR: " + e);
          })

        })

        dadosLista.push("Mesorregião")
        dadosLista.push(totalEstadual)
        dadosLista.push(totalEstadual)
        dadosLista.push(totalMunicipal)
        dadosLista.push(totalPrivada)

        return dadosLista  
      }

      
    }
  }
}
</script>
