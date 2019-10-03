'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _censo = require('../models/censo');

var _censo2 = _interopRequireDefault(_censo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CensoRepository {
    constructor() {}

    list(params) {
        let page = params.page;
        delete params.page;

        return _censo2.default.find(params).populate('CO_ENTIDADE').sort({ _id: 1 });
    }

    get(id) {
        return _censo2.default.find({ _id: parseInt(id) });
    }

    create(data) {
        const entity = new _censo2.default(data);
        entity.save();
    }

    update(id, data) {
        _censo2.default.findByIdAndUpdate({ _id: parseInt(id) }, { $set: data });
    }

    delete(id) {
        _censo2.default.findOneAndRemove(parseInt(id));
    }
}

exports.default = CensoRepository;
//# sourceMappingURL=censoRepository.js.map