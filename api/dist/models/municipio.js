'use strict';

var _validatorjs = require('validatorjs');

var _validatorjs2 = _interopRequireDefault(_validatorjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mongoose = require('mongoose');


const MunicipioSchema = new mongoose.Schema({
    _id: Number,
    nome: String,
    microrregiao: String,
    mesorregiao: String,
    estado: String,
    regiao: String,
    pais: String,
    latitude: String,
    longitude: String,
    geojson: String
});

MunicipioSchema.statics.validadeCreate = obj => {
    let rules = {
        nome: 'required',
        microrregiao: 'required',
        mesorregiao: 'required',
        estado: 'required',
        regiao: 'required',
        pais: 'required',
        latitude: 'required',
        longitude: 'required',
        geojson: 'required'
    };
    return new _validatorjs2.default(obj, rules);
};

module.exports = mongoose.model('Municipio', MunicipioSchema, 'municipios');
//# sourceMappingURL=municipio.js.map