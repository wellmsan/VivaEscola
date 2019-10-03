// import osmAuth from 'osm-auth'
import Http from '../config/service/osmauth'
/*
const auth = osmAuth({
    oauth_consumer_key: 'oNDySheQsPdKmR54Du0SEWPOiwbQDzzSbCC7CTGL',
    oauth_secret: 't8Z8izAXC5MT3rmt0vdoXS8rJHOl7X8SYmCCmoRl',
    oauth_signature_method: "HMAC-SHA1",
    auto: true
});
*/
export default {
    getCidade: (extraParams = {}) => {
        const params = { params: {...extraParams }};
        return Http.get('search?city=Salvador&state=Bahia&polygon_geojson=1&format=json', params)
    }
}
