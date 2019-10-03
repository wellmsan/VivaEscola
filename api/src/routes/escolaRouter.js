import {Router} from 'express';
import Escola from '../models/escola';
import EscolaController from '../controllers/escolaController';

/* eslint-disable new-cap */
const routes = Router();
const controller = new EscolaController(new Escola());

routes.get('/:id?', controller.list);
routes.post('/', controller.create);
routes.put('/:id', controller.update);
routes.delete('/:id', controller.delete);

export default routes;
