import { Application, Assets, Sprite } from 'pixi.js';
import './index.css'
import { initDevtools } from '@pixi/devtools';


(async () => {
    const app = new Application();
    await app.init({ background: '#1099bb', resizeTo: window, backgroundAlpha: 0.5 });
    document.body.appendChild(app.canvas);

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

    const texture = await Assets.load('https://pixijs.com/assets/bunny.png');
    const bunny = new Sprite(texture);
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
    // window.removeEventListener("resize", handleResize);
})();