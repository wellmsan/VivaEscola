<template>
    <div>
        <b-container fluid>
            <b-row>
              <b-col>
                <b-row>
                  <ColumnChart :cidade="cidade" />
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
    </div>
</template>

<script>
// import bus from "../config/events/bus";

import ColumnChart from "./charts/Column";
import CoreChart from "./charts/BubbleChart";
import Treemap from "./charts/Treemap";

export default {
    name: "ModalContent",
    components: {
        ColumnChart,
        CoreChart,
        Treemap
    },
    props: {
      cidade: Object
    },
    data() {
        return {
            loading: true,
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
        }
    }

}
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