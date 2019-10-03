'use strict';

var _validatorjs = require('validatorjs');

var _validatorjs2 = _interopRequireDefault(_validatorjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mongoose = require('mongoose');


const EscolaSchema = new mongoose.Schema({
    _id: Number,
    nome: String,
    municipio_id: String,
    cod_orgao: String
});

EscolaSchema.statics.validadeCreate = obj => {
    let rules = {
        nome: 'required',
        municipio_id: 'required',
        cod_orgao: 'required'
    };
    return new _validatorjs2.default(obj, rules);
};

module.exports = mongoose.model('Escola', EscolaSchema, 'escolas');
//# sourceMappingURL=escola.js.map