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
    const manifest = {
        "bundles": [
            {
                "name": "symbols",
                "assets": [
                    {
                        "alias": "h1",
                        "src": "/symbols/H1.png"
                    },
                    {
                        "alias": "h2",
                        "src": "/symbols/H2.png"
                    }
                ]
            },
            {
                "name": "GameUi",
                "assets": [
                    {
                        "alias": "spin",
                        "src": "/Game UI/Spin.png"
                    },
                    {
                        "alias": "frame",
                        "src": "/Game UI/Frame.png"
                    }
                ]
            }
        ]
    };
    yield pixi_js_1.Assets.init({ manifest });
    const loadImg = yield pixi_js_1.Assets.loadBundle("symbols");
}))();
