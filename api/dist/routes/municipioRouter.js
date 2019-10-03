'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _municipio = require('../models/municipio');

var _municipio2 = _interopRequireDefault(_municipio);

var _municipioController = require('../controllers/municipioController');

var _municipioController2 = _interopRequireDefault(_municipioController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable new-cap */
const routes = (0, _express.Router)();
const controller = new _municipioController2.default(new _municipio2.default());

routes.get('/:id?', controller.list);
routes.post('/', controller.create);
routes.put('/:id', controller.update);
routes.delete('/:id', controller.delete);

exports.default = routes;
//# sourceMappingURL=municipioRouter.js.map