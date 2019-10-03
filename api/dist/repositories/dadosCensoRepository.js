'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dadosCenso = require('../models/dadosCenso');

var _dadosCenso2 = _interopRequireDefault(_dadosCenso);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class DadosCensoRepository {
    constructor() {}

    list(params) {
        let page = params.page;
        delete params.page;

        return _dadosCenso2.default.find(params).sort({ _id: 1 });
    }

    get(id) {
        return _dadosCenso2.default.find({ _id: parseInt(id) });
    }

    create(data) {
        const entity = new _dadosCenso2.default(data);
        entity.save();
    }

    update(id, data) {
        _dadosCenso2.default.findByIdAndUpdate({ _id: parseInt(id) }, { $set: data });
    }

    delete(id) {
        _dadosCenso2.default.findOneAndRemove(parseInt(id));
    }
}

exports.default = DadosCensoRepository;
//# sourceMappingURL=dadosCensoRepository.js.map