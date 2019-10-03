import {Router} from 'express';
/* eslint-disable new-cap */
const routes = Router();

routes.get('/', (req, res) => {
	res.render('index', {title: 'API VivaEscola'});
});

routes.get('/list', (req, res, next) => {
	const {title} = req.query;

	if (title == null || title === '') {
		return next(new Error('The "title" parameter is required!'));
	}

	res.render('index', {title});
});


export default routes;
