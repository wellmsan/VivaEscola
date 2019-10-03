import {Router} from 'express';
import DadosCenso from '../models/dadosCenso';
import DadosCensoController from '../controllers/dadosCensoController';

/* eslint-disable new-cap */
const routes = Router();
const controller = new DadosCensoController(new DadosCenso());

routes.get('/:id?', controller.list);
routes.post('/', controller.create);
routes.put('/:id', controller.update);
routes.delete('/:id', controller.delete);

export default routes;
