'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _escolaRepository = require('../repositories/escolaRepository');

var _escolaRepository2 = _interopRequireDefault(_escolaRepository);

var _expressValidator = require('express-validator');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable new-cap */
const repository = new _escolaRepository2.default();

class EscolaController {
    constructor() {}

    list(req, res) {
        if (!req.params.id) {
            repository.list(req.query).then(async data => {
                res.status(200).json(data);
            }, e => {
                res.status(500).send({ message: 'Error: ' + e.message });
            });
        } else {
            repository.get(req.params.id).then(async data => {
                res.status(200).json(data);
            }, e => {
                res.status(500).send({ message: 'Error: ' + e.message });
            });
        }
    }

    create(req, res) {
        const { errors } = (0, _expressValidator.validationResult)(req);
        if (errors.length > 0) {
            res.status(400).send({ message: 'Error: ' + errors });
        }
        try {
            repository.create(req.body);
            res.status(201).send({ message: 'Escola cadastrada com sucesso!' });
        } catch (e) {
            res.status(500).send({ message: 'Error: ' + e.message });
        }
    }

    update(req, res) {
        const { errors } = (0, _expressValidator.validationResult)(req);
        if (errors.length > 0) {
            res.status(400).send({ message: 'Error: ' + errors });
        }
        try {
            console.log('ID: ' + req.params.id);
            repository.update(req.params.id, req.body);
            res.status(201).send({ message: 'Escola atualizada com sucesso!' });
        } catch (e) {
            res.status(500).send({ message: 'Error: ' + e.message });
        }
    }

    delete(req, res) {
        repository.delete(req.params.id).then(async () => {
            res.status(201).send({ message: 'Escola excuída com sucesso!' });
        }, e => {
            res.status(500).send({ message: 'Error: ' + e.message });
        });
    }
}

exports.default = EscolaController;
//# sourceMappingURL=escolaController.js.map