import { Application, Assets, Sprite, Graphics, Text, TextStyle, Container } from 'pixi.js';
import './index.css'
import { initDevtools } from '@pixi/devtools';
import start from './test';
import { manifest } from './assets';

(async () => {
    const app = new Application();
    await app.init({ background: '#1099bb', resizeTo: window, backgroundAlpha: 0.5 });
    document.body.appendChild(app.canvas);




    // const data = await Assets.loadBundle("symbols");
    // const a1 = Sprite.from(data.h1);
    // app.stage.addChild(a1);


    initDevtools(app);

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
    app.stage.addChild(start);

    let textStyle = new TextStyle({
        fontFamily: "Helvetica",
        fontSize: 24,
        fill: 0x000000
    })
    let text = new Text({
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

    await Assets.init({ manifest: "/manifest.json" });

    try {
        const data = await Assets.loadBundle('animation');
        console.log('Assets loaded:', data);
        const a1 = Sprite.from(data.bg_animation);
        app.stage.addChild(a1);
    } catch (error) {
        console.error('Error loading assets:', error);
    }
})();
// export default app
