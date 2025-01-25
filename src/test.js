"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pixi_js_1 = require("pixi.js");
const _1 = require(".");
console.log("testttttttttttttttttt");
let start = new pixi_js_1.Graphics().star(250, 250, 12, 80, 2).fill({ color: 0X000000 });
_1.app.stage.addChild(start);
