import p5 from "p5";
import color from "./color.js";
import Star from "./model/Star.js";
import StarField from "./model/StarField.js";
import $ from "jquery";

require("../sass/app.scss");

let sf = StarField.instance();
var p = new p5(function(p){

    //setup runs once
    p.setup = () => {
        p.createCanvas(p.windowWidth,p.windowHeight);

        var star = new Star(p);
        sf.add(star);
    }

    //draw happens every frame
    p.draw = () => {
        p.background(color.background);
        sf.field.forEach(star => {
            star.draw();
        });
    }

    //resize event changing the canvas size
    p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    }

});
