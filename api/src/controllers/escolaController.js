import EscolaRepository from '../repositories/escolaRepository';
import {validationResult} from 'express-validator';

/* eslint-disable new-cap */
const repository = new EscolaRepository();

class EscolaController {
    constructor() { }

    list(req, res) {
        if (!req.params.id) {
            repository.list(req.query)
                .then(async (data) => {
                    res.status(200).json(data);
                }, (e) => {
                    res.status(500).send({message: 'Error: ' + e.message});
                });
        } else {
            repository.get(req.params.id)
                .then(async (data) => {
                    res.status(200).json(data);
                }, (e) => {
                    res.status(500).send({message: 'Error: ' + e.message});
                });
        }
    }

    create(req, res) {
        const {errors} = validationResult(req);
        if (errors.length > 0) {
            res.status(400).send({message: 'Error: ' + errors});
        }
        try {
            repository.create(req.body);
            res.status(201).send({message: 'Escola cadastrada com sucesso!'});
        } catch (e) {
            res.status(500).send({message: 'Error: ' + e.message});
        }
    }

    update(req, res) {
        const {errors} = validationResult(req);
        if (errors.length > 0) {
            res.status(400).send({message: 'Error: ' + errors});
        }
        try {
            console.log('ID: ' + req.params.id);
            repository.update(req.params.id, req.body);
            res.status(201).send({message: 'Escola atualizada com sucesso!'});
        } catch (e) {
            res.status(500).send({message: 'Error: ' + e.message});
        }
    }

    delete(req, res) {
        repository.delete(req.params.id)
            .then(async () => {
                res.status(201).send({message: 'Escola excuída com sucesso!'});
            }, (e) => {
                res.status(500).send({message: 'Error: ' + e.message});
            });
    }
}

export default EscolaController;
