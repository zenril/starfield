import Model from './Model.js';

class Position extends Model {

    constructor(x,y,a) {
        super();

        this.x = x;
        this.y = y;
        this.a = a;
        this.entity = null;

        Position.all.__all.push(this);
        // if(this.entity){
        //     var id = this.entity.constructor;
        //     if(!all[id]){
        //         all[id] = [];
        //     }
        //     all[id].push(this);
        // }
    }

    remove(){
        Position.all.__all = all.__all.filter((t)=>{
            return t != this;
        });
    }

    update(position){
        this.x = position.x;w
        this.y = position.y;
        this.a = position.a;
    }

    distanceTo(position){
        return Math.sqrt(Math.pow(position.x - this.x, 2) + Math.pow(position.y - this.y));
    }

    closest(){
        let min = null;
        for (var index = 0; index < Position.all.__all.length; index++) {
            var element = Position.all.__all[index];

            if(min == null){
                min = element;
            }

            if(element == this) continue;

            let distance = this.distanceTo(element);
            if(distance < this.distanceTo(min)) {
                min = element;
            }
        }
        return min;
    }

}

Position.all = {__all :[]};
export default Position;