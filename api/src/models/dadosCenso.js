const mongoose = require('mongoose');

const DadosCensoSchema = new mongoose.Schema({
    ano: {
        type: Number,
        required: true
    },
    municipio: {
        type: String,
        required: true
    },
    federal: {
        type: Number,
        required: true
    },
    estadual: {
        type: Number,
        required: true
    },
    municipal: {
        type: Number,
        required: true
    },
    privada: {
        type: Number,
        required: true
    },
    urbana: {
        type: Number,
        required: true
    },
    rural: {
        type: Number,
        required: true
    },
    count: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('DadosCenso', DadosCensoSchema, 'dados_censo');
