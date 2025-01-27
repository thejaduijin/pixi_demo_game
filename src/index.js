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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pixi_js_1 = require("pixi.js");
require("./index.css");
const devtools_1 = require("@pixi/devtools");
const test_1 = __importDefault(require("./test"));
(() => __awaiter(void 0, void 0, void 0, function* () {
    const app = new pixi_js_1.Application();
    yield app.init({ background: '#1099bb', resizeTo: window, backgroundAlpha: 0.5 });
    document.body.appendChild(app.canvas);
    // const data = await Assets.loadBundle("symbols");
    // const a1 = Sprite.from(data.h1);
    // app.stage.addChild(a1);
    (0, devtools_1.initDevtools)(app);
    function adjustViewPort() {
        const canvas = app.view;
        canvas.style.position = 'absolute';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100vw';
        canvas.style.height = '100vh';
    }
    adjustViewPort();
    // let start = new Graphics().star(250, 250, 12, 80, 2).fill({ color: 0X000000 });
    app.stage.addChild(test_1.default);
    let textStyle = new pixi_js_1.TextStyle({
        fontFamily: "Helvetica",
        fontSize: 24,
        fill: 0x000000
    });
    let text = new pixi_js_1.Text({
        text: "Hello Pixi Walo",
        style: textStyle
    });
    app.stage.addChild(text);
    // let bunny: any;
    // const texture = Assets.load('https://pixijs.com/assets/bunny.png');
    // texture.then((textureResolved: any) => {
    //     bunny = Sprite.from(textureResolved)
    //     bunny.scale.set(1.5, 1.5);
    //     bunny.anchor.set(0.5);
    //     bunny.x = app.screen.width / 2;
    //     bunny.y = app.screen.height / 2;
    //     app.stage.addChild(bunny);
    // })
    // Assets.addBundle("symbols", {
    //     h1: "/assets/symbols/H2.png",
    //     h2: "/assets/symbols/H1.png",
    // });
    // const data = await Assets.loadBundle("symbols");
    // const a1 = Sprite.from(data.h1);
    // app.stage.addChild(a1);
    // let containerA = new Container();
    // let containerB = new Container();
    // let containerC = new Container();
    // containerB.addChild(bunny);
    // containerA.addChild(containerB);
    // const bunny = new Sprite(texture);
    // app.ticker.add((time) => {
    // update();
    // bunny.rotation += 0.1 * time.deltaTime;
    // });
    function resizeBunny() {
        // bunny.x = app.screen.width / 2;
        // bunny.y = app.screen.height / 2;
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
    // window.removeEventListener("resize", handleResize);
    // await Assets.init({ manifest: '/manifest.json' })
    // const data = await Assets.loadBundle('symbols');
    // const a1 = Sprite.from(data.h1);
    // app.stage.addChild(a1);
}))();
// export default app
