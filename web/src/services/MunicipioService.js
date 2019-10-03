import Http from '../config/service/standard'

export default {
    listar: (extraParams = {}) => {
        const params = { params: {...extraParams }};
        return Http.get('/municipios', params)
    },

    get: (id) => {
        return Http.get('/municipios/' + id)
    }
}