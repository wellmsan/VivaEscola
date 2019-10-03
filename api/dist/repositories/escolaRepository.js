'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _escola = require('../models/escola');

var _escola2 = _interopRequireDefault(_escola);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class EscolaRepository {
    constructor() {}

    list(params) {
        let page = params.page;
        delete params.page;
        return _escola2.default.find(params).sort({ _id: 1 });
    }

    get(id) {
        return _escola2.default.find({ _id: parseInt(id) });
    }

    create(data) {
        const escola = new _escola2.default(data);
        escola.save();
    }

    update(id, data) {
        _escola2.default.findByIdAndUpdate({ _id: parseInt(id) }, { $set: data });
    }

    delete(id) {
        _escola2.default.findOneAndRemove(parseInt(id));
    }
}

exports.default = EscolaRepository;
//# sourceMappingURL=escolaRepository.js.map