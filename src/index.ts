// import 'pixi-spine'
// import './index.css'
// import { Application, Assets, Sprite, Graphics, Text, TextStyle, Container } from 'pixi.js';
// import { initDevtools } from '@pixi/devtools';
// // import start from './test';
// import { Spine } from 'pixi-spine';
// import { addStars } from './TrainAnimation/addStars';
// import { addMountains } from './TrainAnimation/addmountains';
// import { addTrees } from './TrainAnimation/addTrees';
// import { addGrounds } from './TrainAnimation/addGrounds';
// import { addTrain } from './TrainAnimation/addTrain';
// import { addSmokes } from './TrainAnimation/addSmoke';
// // import { addMoon } from './TrainAnimation/addMoon';
// // import { manifest } from './assets';
// // import { Spine } from "@pixi/spine-pixi";
// const app = new Application();
// const trainContainer = new Container();


// (async () => {
//     await app.init({ background: '#1099bb', resizeTo: window, backgroundAlpha: 1.5 });
//     document.body.appendChild(app.canvas);

//     await Assets.init({ manifest: "/manifest.json" });

//     // const spineData = loadSpineData();  // Load spine data (JSON or binary)
//     // const spine = new Spine(spineData);

//     // loader.load('spineData.json', function (data) {
//     //     const spine = new Spine(data);
//     // });

//     //FIXME - 
//     // const bigWin1 = Spine.from({
//     //     skeleton: "bigWinSkel",  or  json file Alias
//     //     atlas: "bigWinAtlas",
//     // });
//     // bigWin1.state.setAnimation(0, 'animation_Name', true);
//     // this.addChild(bigWin1);


//     Assets.load("bg_animation").then((resource) => {
//         console.log("ani", resource);
//         // const animation: any = new Spine(resource.animations.animation.bones);

//         // app.stage.addChild(animation);

//         // add the animation to the scene and render...
//         // app.stage.addChild(animation);

//         // if (animation.state.hasAnimation('run')) {
//         //     // run forever, little boy!
//         //     animation.state.setAnimation(0, 'run', true);
//         //     // dont run too fast
//         //     animation.state.timeScale = 0.1;
//         //     // update yourself
//         //     animation.autoUpdate = true;
//         // }
//     });


//     // const data = await Assets.loadBundle("symbols");
//     // const a1 = Sprite.from(data.h1);
//     // app.stage.addChild(a1);


//     initDevtools(app);

//     function adjustViewPort() {
//         const canvas = app.view;
//         canvas.style.position = 'absolute';
//         canvas.style.top = '0';
//         canvas.style.left = '0';
//         canvas.style.width = '100vw';
//         canvas.style.height = '100vh';
//     }

//     adjustViewPort();

//     // let start = new Graphics().star(250, 250, 12, 80, 2).fill({ color: 0X000000 });
//     // app.stage.addChild(start);

//     let textStyle = new TextStyle({
//         fontFamily: "Helvetica",
//         fontSize: 24,
//         fill: 0x000000
//     })
//     let text = new Text({
//         text: "Hello Pixi Walo",
//         style: textStyle
//     });
//     app.stage.addChild(text);

//     // let bunny: any;
//     // const texture = Assets.load('https://pixijs.com/assets/bunny.png');
//     // texture.then((textureResolved: any) => {
//     //     bunny = Sprite.from(textureResolved)
//     //     bunny.scale.set(1.5, 1.5);
//     //     bunny.anchor.set(0.5);
//     //     bunny.x = app.screen.width / 2;
//     //     bunny.y = app.screen.height / 2;
//     //     app.stage.addChild(bunny);
//     // })


//     // Assets.addBundle("symbols", {
//     //     h1: "/assets/symbols/H2.png",
//     //     h2: "/assets/symbols/H1.png",
//     // });

//     // const data = await Assets.loadBundle("symbols");
//     // const a1 = Sprite.from(data.h1);
//     // app.stage.addChild(a1);

//     // let containerA = new Container();
//     // let containerB = new Container();
//     // let containerC = new Container();
//     // containerB.addChild(bunny);


//     // containerA.addChild(containerB);

//     // const bunny = new Sprite(texture);



//     // app.ticker.add((time) => {
//     // update();
//     // bunny.rotation += 0.1 * time.deltaTime;
//     // });

//     // function resizeBunny() {
//         // bunny.x = app.screen.width / 2;
//         // bunny.y = app.screen.height / 2;
//     // }

//     // function resizeApp() {
//     //     app.screen.width = window.innerWidth;
//     //     app.screen.height = window.innerWidth;
//     // }

//     // function handleResize() {
//     //     resizeBunny();
//     //     resizeApp();
//     //     console.log("handleResize");
//     // }

//     // handleResize();
//     // window.addEventListener("resize", handleResize);
//     // window.removeEventListener("resize", handleResize);

//     // await Assets.init({ manifest: "/manifest.json" });

//     // try {
//     //     const data = await Assets.loadBundle('animation');
//     //     console.log('Assets loaded:', data);
//     //     const a1 = Sprite.from(data.bg_animation);
//     //     app.stage.addChild(a1);
//     // } catch (error) {
//     //     console.error('Error loading assets:', error);
//     // }

//     function TrainAnimation(){
//         addStars(app);
//         addMountains(app);
//         // addMoon(app)
//         addTrees(app);
//         addGrounds(app)
//         addTrain(app, trainContainer);
//         addSmokes(app,trainContainer)
//     }
//     // TrainAnimation();
// })();
// // export default app





















import {
    Application,
    Assets,
    BlurFilter,
    Color,
    Container,
    FillGradient,
    Graphics,
    Sprite,
    Text,
    TextStyle,
    Texture,
} from 'pixi.js';

(async () => {
    // Create a new application
    const app = new Application();

    // Initialize the application
    await app.init({ background: '#1099bb', resizeTo: window });

    // Append the application canvas to the document body
    document.body.appendChild(app.canvas);

    // Load the textures
    await Assets.load([
        'https://pixijs.com/assets/eggHead.png',
        'https://pixijs.com/assets/flowerTop.png',
        'https://pixijs.com/assets/helmlok.png',
        'https://pixijs.com/assets/skully.png',
    ]);

    const REEL_WIDTH = 160;
    const SYMBOL_SIZE = 150;

    // Create different slot symbols
    const slotTextures = [
        Texture.from('https://pixijs.com/assets/eggHead.png'),
        Texture.from('https://pixijs.com/assets/flowerTop.png'),
        Texture.from('https://pixijs.com/assets/helmlok.png'),
        Texture.from('https://pixijs.com/assets/skully.png'),
    ];

    // Build the reels
    const reels: any = [];
    const reelContainer = new Container();

    for (let i = 0; i < 5; i++) {
        const rc = new Container();

        rc.x = i * REEL_WIDTH;
        reelContainer.addChild(rc);

        const reel = {
            container: rc,
            symbols: [],
            position: 0,
            previousPosition: 0,
            blur: new BlurFilter(),
        };

        reel.blur.blurX = 0;
        reel.blur.blurY = 0;
        rc.filters = [reel.blur];

        // Build the symbols
        for (let j = 0; j < 4; j++) {
            const symbol: any = new Sprite(slotTextures[Math.floor(Math.random() * slotTextures.length)]);
            // Scale the symbol to fit symbol area.

            symbol.y = j * SYMBOL_SIZE;
            symbol.scale.x = symbol.scale.y = Math.min(SYMBOL_SIZE / symbol.width, SYMBOL_SIZE / symbol.height);
            symbol.x = Math.round((SYMBOL_SIZE - symbol.width) / 2);
            reel.symbols.push(symbol);
            rc.addChild(symbol);
        }
        reels.push(reel);
    }
    app.stage.addChild(reelContainer);

    // Build top & bottom covers and position reelContainer
    const margin = (app.screen.height - SYMBOL_SIZE * 3) / 2;

    reelContainer.y = margin;
    reelContainer.x = Math.round(app.screen.width - REEL_WIDTH * 5);
    const top = new Graphics().rect(0, 0, app.screen.width, margin).fill({ color: 0x0 });
    const bottom = new Graphics().rect(0, SYMBOL_SIZE * 3 + margin, app.screen.width, margin).fill({ color: 0x0 });

    // Create gradient fill
    const fill = new FillGradient(0, 0, 0, 36 * 1.7);

    const colors = [0xffffff, 0x00ff99].map((color) => Color.shared.setValue(color).toNumber());

    colors.forEach((number, index) => {
        const ratio = index / colors.length;

        fill.addColorStop(ratio, number);
    });

    // Add play text
    const style = new TextStyle({
        fontFamily: 'Arial',
        fontSize: 36,
        fontStyle: 'italic',
        fontWeight: 'bold',
        fill: { fill },
        stroke: { color: 0x4a1850, width: 5 },
        dropShadow: {
            color: 0x000000,
            angle: Math.PI / 6,
            blur: 4,
            distance: 6,
        },
        wordWrap: true,
        wordWrapWidth: 440,
    });

    const playText = new Text('Spin the wheels!', style);

    playText.x = Math.round((bottom.width - playText.width) / 2);
    playText.y = app.screen.height - margin + Math.round((margin - playText.height) / 2);
    bottom.addChild(playText);

    // Add header text
    const headerText = new Text('PIXI MONSTER SLOTS!', style);

    headerText.x = Math.round((top.width - headerText.width) / 2);
    headerText.y = Math.round((margin - headerText.height) / 2);
    top.addChild(headerText);

    app.stage.addChild(top);
    app.stage.addChild(bottom);

    // Set the interactivity.
    bottom.eventMode = 'static';
    bottom.cursor = 'pointer';
    bottom.addListener('pointerdown', () => {
        startPlay();
    });

    let running = false;

    // Function to start playing.
    function startPlay() {
        if (running) return;
        running = true;

        for (let i = 0; i < reels.length; i++) {
            const r = reels[i];
            const extra = Math.floor(Math.random() * 3);
            const target = r.position + 10 + i * 5 + extra;
            const time = 2500 + i * 600 + extra * 600;

            tweenTo(r, 'position', target, time, backout(0.5), null, i === reels.length - 1 ? reelsComplete : null);
        }
    }

    // Reels done handler.
    function reelsComplete() {
        running = false;
    }

    // Listen for animate update.
    app.ticker.add(() => {
        // Update the slots.
        for (let i = 0; i < reels.length; i++) {
            const r = reels[i];
            // Update blur filter y amount based on speed.
            // This would be better if calculated with time in mind also. Now blur depends on frame rate.

            r.blur.blurY = (r.position - r.previousPosition) * 8;
            r.previousPosition = r.position;

            // Update symbol positions on reel.
            for (let j = 0; j < r.symbols.length; j++) {
                const s = r.symbols[j];
                const prevy = s.y;

                s.y = ((r.position + j) % r.symbols.length) * SYMBOL_SIZE - SYMBOL_SIZE;
                if (s.y < 0 && prevy > SYMBOL_SIZE) {
                    // Detect going over and swap a texture.
                    // This should in proper product be determined from some logical reel.
                    s.texture = slotTextures[Math.floor(Math.random() * slotTextures.length)];
                    s.scale.x = s.scale.y = Math.min(SYMBOL_SIZE / s.texture.width, SYMBOL_SIZE / s.texture.height);
                    s.x = Math.round((SYMBOL_SIZE - s.width) / 2);
                }
            }
        }
    });

    // Very simple tweening utility function. This should be replaced with a proper tweening library in a real product.
    const tweening: any = [];

    function tweenTo(object: any, property: any, target: any, time: any, easing: any, onchange: any, oncomplete: any) {
        const tween = {
            object,
            property,
            propertyBeginValue: object[property],
            target,
            easing,
            time,
            change: onchange,
            complete: oncomplete,
            start: Date.now(),
        };

        tweening.push(tween);

        return tween;
    }
    // Listen for animate update.
    app.ticker.add(() => {
        const now = Date.now();
        const remove = [];

        for (let i = 0; i < tweening.length; i++) {
            const t = tweening[i];
            const phase = Math.min(1, (now - t.start) / t.time);

            t.object[t.property] = lerp(t.propertyBeginValue, t.target, t.easing(phase));
            if (t.change) t.change(t);
            if (phase === 1) {
                t.object[t.property] = t.target;
                if (t.complete) t.complete(t);
                remove.push(t);
            }
        }
        for (let i = 0; i < remove.length; i++) {
            tweening.splice(tweening.indexOf(remove[i]), 1);
        }
    });

    // Basic lerp funtion.
    function lerp(a1: any, a2: any, t: any) {
        return a1 * (1 - t) + a2 * t;
    }

    // Backout function from tweenjs.
    // https://github.com/CreateJS/TweenJS/blob/master/src/tweenjs/Ease.js
    function backout(amount: any) {
        return (t: any) => --t * t * ((amount + 1) * t + amount) + 1;
    }
})();








