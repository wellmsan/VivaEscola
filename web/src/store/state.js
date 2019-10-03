import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        estadoSelecionado: null
    },
    
    getters: {

    },

    mutations: {
        alterarEstado(state, estado) {
            state.estadoSelecionado = estado
        }
    },

    actions: {
        alterarEstado(context, estado){
            context.commit('alterarEstado', estado)
        }
    }
});