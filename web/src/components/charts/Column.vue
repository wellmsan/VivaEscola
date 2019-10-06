<template>
  <div>
    <GChart type="ColumnChart" :data="data" :options="options" />
  </div>
</template>
<script>
import { GChart } from "vue-google-charts";
import MunicipioService from "../../services/MunicipioService";

export default {
  name: "ColumnChart",
  components: {
    GChart
  },
  props: {
    cidade: Object,
  },

  data() {
    return {
      loading: true,
      totalMicroFederal: 0,
      totalMicroEstadual: 0,
      totalMicroMunicipal: 0,
      totalMicroPrivada: 0,
      totalMesoFederal: 0,
      totalMesoEstadual: 0,
      totalMesoMunicipal: 0,
      totalMesoPrivada: 0,
      data: [
        ["Região", "Federal", "Estadual", "Municipal", "Privada"],
        ["Microrregião", '\'' + this.totalMicroFederal + '\'', '\'' + this.totalMicroEstadual + '\'', '\'' + this.totalMicroMunicipal + '\'', '\'' + this.totalMicroPrivada + '\''],
        ["Mesorregião", '\'' + this.totalMesoFederal + '\'', '\'' + this.totalMesoEstadual + '\'', '\'' + this.totalMesoMunicipal + '\'', '\'' + this.totalMesoPrivada + '\'']
      ],
      options: {
        chart: {
          title: "Company Performance",
          subtitle: "Sales, Expenses, and Profit: 2014-2017"
        }
      }
    };
  },

  created() {    
    this.cidadesMicrorregiao()
  },

  methods: {
    cidadesMicrorregiao(){
      let params = {
        microrregiao: this.cidade.microrregiao
      }

      const cidades = MunicipioService.listar(params)
        .then(response => {
          return response.data
        }).catch(e => {
            // eslint-disable-next-line
            console.error("ERROR: " + e);
        }).finally(() => {
            this.loading = false;
        })
        // eslint-disable-next-line
        console.log("CIDADES: " + cidades);
      /*
      cidades.forEach(cidade => {
        this.totalMicroFederal += cidade.qtdTotalFederal,
        this.totalMicroEstadual += cidade.qtdTotalEstadual,
        this.totalMicroMunicipal += cidade.qtdTotalMunicipal,
        this.totalMicroPrivada += cidade.qtdTotalPrivada
        // eslint-disable-next-line
        console.log("TOTAL: " + cidade.qtdTotalFederal);
      })
      */
    }
  }
};
</script>
