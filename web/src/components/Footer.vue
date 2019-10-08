<template>
  <div>
    <loading :active.sync="loading" :is-full-page="fullpage"></loading>
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
import Loading from 'vue-loading-overlay';
import bus from "../config/events/bus";

export default {
  name: "FooterBar",
  components: { Loading },

  data() {
    return {
      loading: false,
      fullpage: false,
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
      ]
    };
  },

  created() {},

  methods: {
    submit() {
      this.loading = true
      bus.$emit("submit", this.estado, this.tipoMapa);
      this.loading = false
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