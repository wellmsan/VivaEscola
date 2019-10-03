import Entity from '../models/municipio';

class MunicipioRepository {
    constructor() {}

    list(params) {
        let page = params.page;
        delete params.page;
        console.log('LIST ' + params)
        return Entity.find(params)
            .sort({_id: 1})
    }

    get(id) {
        console.log('GET ' + id)
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

export default MunicipioRepository;
