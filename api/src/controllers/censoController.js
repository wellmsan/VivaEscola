import CensoRepository from '../repositories/censoRepository';
import {validationResult} from 'express-validator';

/* eslint-disable new-cap */
const repository = new CensoRepository();

class CensoController {
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
            res.status(201).send({message: 'Cesco cadastrado com sucesso!'});
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
            res.status(201).send({message: 'Cesco atualizado com sucesso!'});
        } catch (e) {
            res.status(500).send({message: 'Error: ' + e.message});
        }
    }

    delete(req, res) {
        repository.delete(req.params.id)
            .then(async () => {
                res.status(201).send({message: 'Cesco excuído com sucesso!'});
            }, (e) => {
                res.status(500).send({message: 'Error: ' + e.message});
            });
    }
}

export default CensoController;
