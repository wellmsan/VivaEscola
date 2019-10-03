import Entity from '../models/escola';

class EscolaRepository {
    constructor() {}

    list(params) {
        let page = params.page;
        delete params.page;
        return Entity.find(params)
            .sort({_id: 1})
    }

    get(id) {
        return Entity.find({_id: parseInt(id)});
    }

    create(data) {
        const escola = new Entity(data);
        escola.save();
    }

    update(id, data) {
        Entity.findByIdAndUpdate({_id: parseInt(id)}, {$set: data});
    }

    delete(id) {
        Entity.findOneAndRemove(parseInt(id));
    }
}

export default EscolaRepository;
