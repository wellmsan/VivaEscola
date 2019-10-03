import express from 'express';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import http from 'http';
import path from 'path';
import config from 'config';
import routes from './routes';
import escolaRouter from './routes/escolaRouter';
import municipioRouter from './routes/municipioRouter';
import censoRouter from './routes/censoRouter';
import dadosCensoRouter from './routes/dadosCensoRouter'
import mongoose from 'mongoose';
import cors from 'cors';
require('dotenv').config();

const app = express();
app.use(cors());

app.disable('x-powered-by'); // disable x-powered-by
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');
app.set('port', config.get('app.port'));

// Database
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: true,
});

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Mongoose default connection is open');
});

db.on('error', (err) => {
    console.log(`Mongoose default connection has occured \n${err}`);
});

db.on('disconnected', () => {
    console.log('Mongoose default connection is disconnected');
});

process.on('SIGINT', () => {
    db.close(() => {
        console.log(
            'Mongoose default connection is disconnected due to application termination'
        );
        process.exit(0);
    });
});

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);
app.use('/escolas', escolaRouter);
app.use('/municipios', municipioRouter);
app.use('/censos', censoRouter);
app.use('/dadoscenso', dadosCensoRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handler
app.use((err, req, res, next) => {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

const server = http.createServer(app);
const port = app.get('port');
server.listen(port, () => {
	console.log(`Application listening on ${config.get('app.baseUrl')}`);
	console.log(`Environment => ${config.util.getEnv('NODE_ENV')}`);
});

export default app;
