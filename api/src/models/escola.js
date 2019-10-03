const mongoose = require('mongoose');
import Validator from 'validatorjs';

const EscolaSchema = new mongoose.Schema({
    _id: Number,
    nome: String,
    municipio_id: String,
    cod_orgao: String,
});

EscolaSchema.statics.validadeCreate = (obj) => {
    let rules = {
        nome: 'required',
        municipio_id: 'required',
        cod_orgao: 'required',
    };
    return new Validator(obj, rules);
};

module.exports = mongoose.model('Escola', EscolaSchema, 'escolas');
