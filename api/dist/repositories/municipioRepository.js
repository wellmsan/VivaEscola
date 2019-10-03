'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _municipio = require('../models/municipio');

var _municipio2 = _interopRequireDefault(_municipio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class MunicipioRepository {
    constructor() {}

    list(params) {
        let page = params.page;
        delete params.page;
        console.log('LIST ' + params);
        return _municipio2.default.find(params).sort({ _id: 1 });
    }

    get(id) {
        console.log('GET ' + id);
        return _municipio2.default.find({ _id: parseInt(id) });
    }

    create(data) {
        const escola = new _municipio2.default(data);
        escola.save();
    }

    update(id, data) {
        _municipio2.default.findByIdAndUpdate({ _id: parseInt(id) }, { $set: data });
    }

    delete(id) {
        _municipio2.default.findOneAndRemove(parseInt(id));
    }
}

exports.default = MunicipioRepository;
//# sourceMappingURL=municipioRepository.js.map