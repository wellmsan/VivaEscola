'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _censo = require('../models/censo');

var _censo2 = _interopRequireDefault(_censo);

var _censoController = require('../controllers/censoController');

var _censoController2 = _interopRequireDefault(_censoController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable new-cap */
const routes = (0, _express.Router)();
const controller = new _censoController2.default(new _censo2.default());

routes.get('/:id?', controller.list);
routes.post('/', controller.create);
routes.put('/:id', controller.update);
routes.delete('/:id', controller.delete);

exports.default = routes;
//# sourceMappingURL=censoRouter.js.map