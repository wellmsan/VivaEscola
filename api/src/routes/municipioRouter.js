import {Router} from 'express';
import Municipio from '../models/municipio';
import MunicipioController from '../controllers/municipioController';

/* eslint-disable new-cap */
const routes = Router();
const controller = new MunicipioController(new Municipio());

routes.get('/:id?', controller.list);
routes.post('/', controller.create);
routes.put('/:id', controller.update);
routes.delete('/:id', controller.delete);

export default routes;
