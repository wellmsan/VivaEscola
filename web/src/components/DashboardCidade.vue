<template>
    <div>
        <b-container fluid>
            <b-row>
                <b-col>
                    <h3>{{ cidade.nome }} / {{ cidade.qtdTotalEscolas }}</h3>
                </b-col>
                <b-col>
                    <div class="areaBtnRegioes">
                        <b-button class="btnRegioes">Microrregião</b-button>
                        <b-button class="btnRegioes" variant="warning">Mesorregião</b-button>
                    </div>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b-progress class="mt-2" :max="cidade.max" show-value>
                        <b-progress-bar :value="(cidade.qtdTotalEscolas * cidade.max)/cidade.qtdTotalEstadual" variant="success"></b-progress-bar>
                        <b-progress-bar :value="(cidade.qtdTotalEscolas * cidade.max)/cidade.qtdTotalMunicipal" variant="warning"></b-progress-bar>
                        <b-progress-bar :value="(cidade.qtdTotalEscolas * cidade.max)/cidade.qtdTotalFederal" variant="danger"></b-progress-bar>
                    </b-progress>    
                </b-col>
            </b-row>    
        </b-container>
    </div>
</template>

<script>

export default {
    props: {
        cidade: Object
        /*
        nome: String,
        microrregiao: String,
        mesorregiao: String,
        qtdTotalEscolas: Number,
        qtdTotalEstadual: Number,
        qtdTotalMunicipal: Number,
        qtdTotalFederal: Number,
        max: Number
        */
    },
    data() {
        return {
            loading: false,
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
    }

    .btnRegioes {
        margin-right: 2px;
    }

</style>