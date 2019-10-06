<template>
    <div>
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
    </div>
</template>

<script>
// import bus from "../config/events/bus";

import ColumnChart from "./charts/Column";
import CoreChart from "./charts/BubbleChart";
import Treemap from "./charts/Treemap";

export default {
    name: "DashboardCidade",
    components: {
        ColumnChart,
        CoreChart,
        Treemap
    },
    props: {
      cidade: Object,
      qtdTotalEscolas: {
        type: Number,
        required: true
      },
      qtdTotalFederal: {
        type: Number,
        required: true
      },
      qtdTotalEstadual: {
        type: Number,
        required: true
      },
      qtdTotalMunicipal: {
        type: Number,
        required: true
      },
      qtdTotalPrivada: {
        type: Number,
        required: true
      }
    },
    data() {
        return {
            loading: false,
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
    
    .areaBtnRegioes {
        text-align: right;
        padding-top: 3vh;
    }

    .selectAno {
      width: 1vh;
    }

</style>