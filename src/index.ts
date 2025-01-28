import 'pixi-spine'
import { Application, Assets, Sprite, Graphics, Text, TextStyle, Container } from 'pixi.js';
import './index.css'
import { initDevtools } from '@pixi/devtools';
import start from './test';
import { Spine } from 'pixi-spine';
import { addStars } from './TrainAnimation/addStars';
import { addMountains } from './TrainAnimation/addmountains';
import { addTrees } from './TrainAnimation/addTrees';
import { addGrounds } from './TrainAnimation/addGrounds';
import { addTrain } from './TrainAnimation/addTrain';
import { addSmokes } from './TrainAnimation/addSmoke';
// import { addMoon } from './TrainAnimation/addMoon';
// import { manifest } from './assets';
// import { Spine } from "@pixi/spine-pixi";
const app = new Application();
const trainContainer = new Container();


(async () => {
    await app.init({ background: '#1099bb', resizeTo: window, backgroundAlpha: 1.5 });
    document.body.appendChild(app.canvas);

    await Assets.init({ manifest: "/manifest.json" });

    // const spineData = loadSpineData();  // Load spine data (JSON or binary)
    // const spine = new Spine(spineData);

    // loader.load('spineData.json', function (data) {
    //     const spine = new Spine(data);
    // });

    //FIXME - 
    // const bigWin1 = Spine.from({
    //     skeleton: "bigWinSkel",  or  json file Alias
    //     atlas: "bigWinAtlas",
    // });
    // bigWin1.state.setAnimation(0, 'animation_Name', true);
    // this.addChild(bigWin1);


    Assets.load("bg_animation").then((resource) => {
        console.log("ani", resource);
        // const animation: any = new Spine(resource.animations.animation.bones);

        // app.stage.addChild(animation);

        // add the animation to the scene and render...
        // app.stage.addChild(animation);

        // if (animation.state.hasAnimation('run')) {
        //     // run forever, little boy!
        //     animation.state.setAnimation(0, 'run', true);
        //     // dont run too fast
        //     animation.state.timeScale = 0.1;
        //     // update yourself
        //     animation.autoUpdate = true;
        // }
    });


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

    // function resizeBunny() {
        // bunny.x = app.screen.width / 2;
        // bunny.y = app.screen.height / 2;
    // }

    // function resizeApp() {
    //     app.screen.width = window.innerWidth;
    //     app.screen.height = window.innerWidth;
    // }

    // function handleResize() {
    //     resizeBunny();
    //     resizeApp();
    //     console.log("handleResize");
    // }

    // handleResize();
    // window.addEventListener("resize", handleResize);
    // window.removeEventListener("resize", handleResize);

    // await Assets.init({ manifest: "/manifest.json" });

    // try {
    //     const data = await Assets.loadBundle('animation');
    //     console.log('Assets loaded:', data);
    //     const a1 = Sprite.from(data.bg_animation);
    //     app.stage.addChild(a1);
    // } catch (error) {
    //     console.error('Error loading assets:', error);
    // }

    function TrainAnimation(){
        addStars(app);
        addMountains(app);
        // addMoon(app)
        addTrees(app);
        addGrounds(app)
        addTrain(app, trainContainer);
        addSmokes(app,trainContainer)
    }
    TrainAnimation();
})();
// export default app
