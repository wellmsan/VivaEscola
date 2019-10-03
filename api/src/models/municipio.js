const mongoose = require('mongoose');
import Validator from 'validatorjs';

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
    geojson: String,
});

MunicipioSchema.statics.validadeCreate = (obj) => {
    let rules = {
        nome: 'required',
        microrregiao: 'required',
        mesorregiao: 'required',
        estado: 'required',
        regiao: 'required',
        pais: 'required',
        latitude: 'required',
        longitude: 'required',
        geojson: 'required',
    };
    return new Validator(obj, rules);
};

module.exports = mongoose.model('Municipio', MunicipioSchema, 'municipios');
