"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const pixi_js_1 = require("pixi.js");
require("./index.css");
const devtools_1 = require("@pixi/devtools");
// import { update } from './app';
exports.app = new pixi_js_1.Application();
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield exports.app.init({ background: '#1099bb', resizeTo: window, backgroundAlpha: 0.5 });
    document.body.appendChild(exports.app.canvas);
    (0, devtools_1.initDevtools)(exports.app);
    function adjustViewPort() {
        const canvas = exports.app.view;
        canvas.style.position = 'absolute';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100vw';
        canvas.style.height = '100vh';
    }
    adjustViewPort();
    // let start = new Graphics().star(250, 250, 12, 80, 2).fill({ color: 0X000000 });
    // app.stage.addChild(start);
    let textStyle = new pixi_js_1.TextStyle({
        fontFamily: "Helvetica",
        fontSize: 24,
        fill: 0x000000
    });
    let text = new pixi_js_1.Text({
        text: "Hello Pixi Walo",
        style: textStyle
    });
    exports.app.stage.addChild(text);
    const texture = yield pixi_js_1.Assets.load('https://pixijs.com/assets/bunny.png');
    const bunny = pixi_js_1.Sprite.from(texture);
    // const bunny = new Sprite(texture);
    bunny.anchor.set(0.5);
    bunny.x = exports.app.screen.width / 2;
    bunny.y = exports.app.screen.height / 2;
    exports.app.stage.addChild(bunny);
    // app.ticker.add((time) => {
    // update();
    // bunny.rotation += 0.1 * time.deltaTime;
    // });
    function resizeBunny() {
        bunny.x = exports.app.screen.width / 2;
        bunny.y = exports.app.screen.height / 2;
    }
    function resizeApp() {
        exports.app.screen.width = window.innerWidth;
        exports.app.screen.height = window.innerWidth;
    }
    function handleResize() {
        resizeBunny();
        resizeApp();
        console.log("handleResize");
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    // window.removeEventListener("resize", handleResize);
}))();
