<template>
    <div>
        <b-container fluid>
            <b-row>
              <b-col>
                <b-row>
                  <ColumnChart />
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
import bus from "../config/events/bus";

import ColumnChart from "./charts/Column";
// import CoreChart from "./charts/BubbleChart";
// import Treemap from "./charts/Treemap";

import MunicipioService from "../services/MunicipioService";

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
            loading: true,
            columnData: [],
            cidadesMicrorregiao: [],
            cidadesMesorregiao: []
        }
    },

    created() {
      if(this.cidade != null){
        this.loadCidadesMicrorregiao(this.cidade.microrregiao)
        this.loadCidadesMesorregiao(this.cidade.mesorregiao)
      }
    },

    methods: {
      async loadCidadesMicrorregiao(microrregiao) {
        this.loading = true
        let params = {
          microrregiao: microrregiao
        }
        this.cidadesMicrorregiao = await MunicipioService.listar(params)
          .then(response => {
            return response.data
          }).catch(e => {
              // eslint-disable-next-line
              console.error("ERROR: " + e);
          }).finally(() => {
              this.loading = false;
          })
        bus.$emit('cidadesMicrorregiao', this.cidadesMicrorregiao)
      },

      async loadCidadesMesorregiao(mesorregiao) {
        this.loading = true
        let params = {
          mesorregiao: mesorregiao
        }
        this.cidadesMesorregiao = await MunicipioService.listar(params)
          .then(response => {
            return response.data      
          }).catch(e => {
              // eslint-disable-next-line
              console.error("ERROR: " + e);
          }).finally(() => {
              this.loading = false;
          })
        bus.$emit('cidadesMesorregiao', this.cidadesMesorregiao)
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