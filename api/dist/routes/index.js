'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

/* eslint-disable new-cap */
const routes = (0, _express.Router)();

routes.get('/', (req, res) => {
	res.render('index', { title: 'API VivaEscola' });
});

routes.get('/list', (req, res, next) => {
	const { title } = req.query;

	if (title == null || title === '') {
		return next(new Error('The "title" parameter is required!'));
	}

	res.render('index', { title });
});

exports.default = routes;
//# sourceMappingURL=index.js.map