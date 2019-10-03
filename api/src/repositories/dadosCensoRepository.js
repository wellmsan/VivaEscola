import Entity from '../models/dadosCenso';

class DadosCensoRepository {
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
        const entity = new Entity(data);    
        entity.save();
    }

    update(id, data) {
        Entity.findByIdAndUpdate({_id: parseInt(id)}, {$set: data});
    }

    delete(id) {
        Entity.findOneAndRemove(parseInt(id));
    }
}

export default DadosCensoRepository;
