'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _dadosCenso = require('../models/dadosCenso');

var _dadosCenso2 = _interopRequireDefault(_dadosCenso);

var _dadosCensoController = require('../controllers/dadosCensoController');

var _dadosCensoController2 = _interopRequireDefault(_dadosCensoController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable new-cap */
const routes = (0, _express.Router)();
const controller = new _dadosCensoController2.default(new _dadosCenso2.default());

routes.get('/:id?', controller.list);
routes.post('/', controller.create);
routes.put('/:id', controller.update);
routes.delete('/:id', controller.delete);

exports.default = routes;
//# sourceMappingURL=dadosCensoRouter.js.map