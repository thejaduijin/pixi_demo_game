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
const pixi_js_1 = require("pixi.js");
require("./index.css");
(() => __awaiter(void 0, void 0, void 0, function* () {
    const app = new pixi_js_1.Application();
    yield app.init({ background: '#1099bb', resizeTo: window });
    document.body.appendChild(app.canvas);
    function adjustViewPort() {
        const canvas = app.view;
        canvas.style.position = 'absolute';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100vw';
        canvas.style.height = '100vh';
    }
    adjustViewPort();
    const texture = yield pixi_js_1.Assets.load('https://pixijs.com/assets/bunny.png');
    const bunny = new pixi_js_1.Sprite(texture);
    bunny.anchor.set(0.5);
    bunny.x = app.screen.width / 2;
    bunny.y = app.screen.height / 2;
    app.stage.addChild(bunny);
    app.ticker.add((time) => {
        // bunny.rotation += 0.1 * time.deltaTime;
    });
    function resizeBunny() {
        bunny.x = app.screen.width / 2;
        bunny.y = app.screen.height / 2;
    }
    function resizeApp() {
        app.screen.width = window.innerWidth;
        app.screen.height = window.innerWidth;
    }
    function handleResize() {
        resizeBunny();
        resizeApp();
        console.log("handleResize");
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    window.removeEventListener("resize", handleResize);
}))();
