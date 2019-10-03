'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _escola = require('../models/escola');

var _escola2 = _interopRequireDefault(_escola);

var _escolaController = require('../controllers/escolaController');

var _escolaController2 = _interopRequireDefault(_escolaController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable new-cap */
const routes = (0, _express.Router)();
const controller = new _escolaController2.default(new _escola2.default());

routes.get('/:id?', controller.list);
routes.post('/', controller.create);
routes.put('/:id', controller.update);
routes.delete('/:id', controller.delete);

exports.default = routes;
//# sourceMappingURL=escolaRouter.js.map