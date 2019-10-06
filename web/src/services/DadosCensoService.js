import Http from '../config/service/standard'

export default {
    listar: (extraParams = {}) => {
        const params = { params: {...extraParams }};
        return Http.get('/dadoscenso', params)
    }
}