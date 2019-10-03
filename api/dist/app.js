'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _escolaRouter = require('./routes/escolaRouter');

var _escolaRouter2 = _interopRequireDefault(_escolaRouter);

var _municipioRouter = require('./routes/municipioRouter');

var _municipioRouter2 = _interopRequireDefault(_municipioRouter);

var _censoRouter = require('./routes/censoRouter');

var _censoRouter2 = _interopRequireDefault(_censoRouter);

var _dadosCensoRouter = require('./routes/dadosCensoRouter');

var _dadosCensoRouter2 = _interopRequireDefault(_dadosCensoRouter);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config();

const app = (0, _express2.default)();
app.use((0, _cors2.default)());

app.disable('x-powered-by'); // disable x-powered-by
app.set('views', _path2.default.join(__dirname, '../views'));
app.set('view engine', 'ejs');
app.set('port', _config2.default.get('app.port'));

// Database
_mongoose2.default.connect(process.env.DATABASE_CONNECTION_STRING, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: true
});

const db = _mongoose2.default.connection;

db.on('connected', () => {
    console.log('Mongoose default connection is open');
});

db.on('error', err => {
    console.log(`Mongoose default connection has occured \n${err}`);
});

db.on('disconnected', () => {
    console.log('Mongoose default connection is disconnected');
});

process.on('SIGINT', () => {
    db.close(() => {
        console.log('Mongoose default connection is disconnected due to application termination');
        process.exit(0);
    });
});

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use((0, _morgan2.default)('dev'));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use((0, _cookieParser2.default)());
app.use(_express2.default.static(_path2.default.join(__dirname, 'public')));
app.use('/', _routes2.default);
app.use('/escolas', _escolaRouter2.default);
app.use('/municipios', _municipioRouter2.default);
app.use('/censos', _censoRouter2.default);
app.use('/dadoscenso', _dadosCensoRouter2.default);

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

const server = _http2.default.createServer(app);
const port = app.get('port');
server.listen(port, () => {
    console.log(`Application listening on ${_config2.default.get('app.baseUrl')}`);
    console.log(`Environment => ${_config2.default.util.getEnv('NODE_ENV')}`);
});

exports.default = app;
//# sourceMappingURL=app.js.map