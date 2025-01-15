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
(() => __awaiter(void 0, void 0, void 0, function* () {
    // Create a new application
    const app = new pixi_js_1.Application();
    // Initialize the application
    yield app.init({ background: '#1099bb', resizeTo: window });
    // Append the application canvas to the document body
    document.body.appendChild(app.canvas);
    // Load the bunny texture
    const texture = yield pixi_js_1.Assets.load('https://pixijs.com/assets/bunny.png');
    // Create a bunny Sprite
    const bunny = new pixi_js_1.Sprite(texture);
    // Center the sprite's anchor point
    bunny.anchor.set(0.5);
    // Move the sprite to the center of the screen
    bunny.x = app.screen.width / 2;
    bunny.y = app.screen.height / 2;
    app.stage.addChild(bunny);
    // Listen for animate update
    app.ticker.add((time) => {
        // Just for fun, let's rotate mr rabbit a little.
        // * Delta is 1 if running at 100% performance *
        // * Creates frame-independent transformation *
        bunny.rotation += 0.1 * time.deltaTime;
    });
}))();
