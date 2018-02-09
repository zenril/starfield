import Model from './Model.js';
import Position from './Position.js';

export default class Star extends Model {

    constructor(p5){
        super();
        this.set({p5 : p5});

        this.position = new Position(Math.random() * this.p5.windowWidth,Math.random() * this.p5.windowHeight,0);
        this.position.set({ entity : this });
    }

    draw(){
        var p = this.position;
        this.p5.ellipse(p.get('x'), p.get('x'), 55, 55);
    }

}