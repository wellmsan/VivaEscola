<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col cols="3">
          <b-form-select
            v-model="estado"
            class="selectEstado"
            :options="estados"
            @change="submit()"
          ></b-form-select>
        </b-col>
        <b-col>
          <b-button variant="danger" @click="somarizar()">Gerar Dados</b-button>
        </b-col>
        <b-col>
          <div>
            <b-img class="logoIFBA" right :src="'../../assets/img/logoIFBA.jpg'" alt="Right image"></b-img>
            <b-img
              class="logoPPGESP"
              right
              :src="'../../assets/img/logoPPGESP.png'"
              alt="Right image"
            ></b-img>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import bus from "../config/events/bus";
import MunicipioService from "../services/MunicipioService";
import EscolaService from "../services/EscolaService";
import CensoService from "../services/CensoService";
import DadosCensoService from "../services/DadosCensoService";

export default {
  name: "FooterBar",
  components: {},

  data() {
    return {
      loading: false,
      estado: null,
      estados: [
        { value: null, text: "Selecione" },
        { value: "Acre", text: "Acre" },
        { value: "Alagoas", text: "Alagoas" },
        { value: "Amapá", text: "Amapá" },
        { value: "Amazonas", text: "Amazonas" },
        { value: "Bahia", text: "Bahia" },
        { value: "Ceará", text: "Ceará" },
        { value: "Distrito Federal", text: "Distrito Federal" },
        { value: "Espírito Santo", text: "Espírito Santo" },
        { value: "Goiás", text: "Goiás" },
        { value: "Maranhão", text: "Maranhão" },
        { value: "Mato Grosso", text: "Mato Grosso" },
        { value: "Mato Grosso do Sul", text: "Mato Grosso do Sul" },
        { value: "Minas Gerais", text: "Minas Gerais" },
        { value: "Pará", text: "Pará" },
        { value: "Paraíba", text: "Paraíba" },
        { value: "Paraná", text: "Paraná" },
        { value: "Pernambuco", text: "Pernambuco" },
        { value: "Piauí", text: "Piauí" },
        { value: "Rio de Janeiro", text: "Rio de Janeiro" },
        { value: "Rio Grande do Norte", text: "Rio Grande do Norte" },
        { value: "Rio Grande do Sul", text: "Rio Grande do Sul" },
        { value: "Rondônia", text: "Rondônia" },
        { value: "Roraima", text: "Roraima" },
        { value: "Santa Catarina", text: "Santa Catarina" },
        { value: "São Paulo", text: "São Paulo" },
        { value: "Sergipe", text: "Sergipe" },
        { value: "Tocantins", text: "Tocantins" }
      ],
      tipoMapa: "cidade",
      tiposMapa: [
        { text: "Mesorregiões", value: "mesorregiao" },
        { text: "Microrregiões", value: "microrregiao" },
        { text: "Cidades", value: "cidade" }
      ],
      ano: 0,
      municipio_id: 0,
      TP_SITUACAO_FUNCIONAMENTO: 1,
      QTD_ESC_FEDERAL: 0,
      QTD_ESC_ESTADUAL: 0,
      QTD_ESC_MUNICIPAL: 0,
      QTD_ESC_PRIVADA: 0
    };
  },

  created() {},

  methods: {
    submit() {
      bus.$emit("submit", this.estado, this.tipoMapa);
    },

    somarizar() {

      MunicipioService.get(290280710)
      .then(response => {    
        

        const pMunicipio = response.data.map((municipio) => {
          let NU_ANO_CENSO = 0
          let MUNICIPIO_ID = 0
          let TP_SITUACAO_FUNCIONAMENTO = 0
          let QTD_ESC_FEDERAL = 0
          let QTD_ESC_ESTADUAL = 0
          let QTD_ESC_MUNICIPAL = 0
          let QTD_ESC_PRIVADA = 0

          let paramsEscola = {
              municipio_id: municipio._id
            };

          EscolaService.listar(paramsEscola)
            .then(response => {

                const pEscola = response.data.map((escola) => {
                  
                  let codEdidade = escola._id;
                  let anosCenso = [2014, 2015, 2016, 2017, 2018];
                  
                  return {
                    CO_ENTIDADE: codEdidade,
                    NO_ANO_CENSO: anosCenso
                  }

                })

            }).catch(e => {
              // eslint-disable-next-line
              console.error("ERROR: " + e);
            })
            .finally(() => (this.loading = false));

          return {
            QTD_ESC_FEDERAL: QTD_ESC_FEDERAL,
            QTD_ESC_ESTADUAL: QTD_ESC_ESTADUAL,
            QTD_ESC_MUNICIPAL: QTD_ESC_MUNICIPAL,
            QTD_ESC_PRIVADA: QTD_ESC_PRIVADA,
          }
        })

        // eslint-disable-next-line
        console.log("MUN: " + pMunicipio[0].QTD_ESC_MUNICIPAL);        

      }).catch(e => {
          // eslint-disable-next-line
          console.error("ERROR: " + e);
        })
        .finally(() => (this.loading = false));
      
    }
  }
};
</script>

<style>
.logoIFBA {
  width: 12vh;
}

.logoPPGESP {
  width: 45vh;
  margin-top: 2vh;
}

.selectEstado {
  margin-top: 3vh;
}
</style>