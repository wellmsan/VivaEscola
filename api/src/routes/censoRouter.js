import {Router} from 'express';
import Censo from '../models/censo';
import CensoController from '../controllers/censoController';

/* eslint-disable new-cap */
const routes = Router();
const controller = new CensoController(new Censo());

routes.get('/:id?', controller.list);
routes.post('/', controller.create);
routes.put('/:id', controller.update);
routes.delete('/:id', controller.delete);

export default routes;
