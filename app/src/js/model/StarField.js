import Model from './Model.js';

let starField = null;
class StarField extends Model {
    constructor() {
        super();
        this.field = [];
    }

    add(star) {
        this.field.push(star);
    }

    static instance() {
        if(!starField){
            starField = new StarField();
        }

        return starField;
    }


}

export default StarField;