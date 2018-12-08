
namespace game {

    /** New System */
    export class FPSSystem extends ut.ComponentSystem {

        private frame = 0;
        private allFrameCount = 0;
        private lastTime = 0;
        private lastFameTime = 0;

        frameTest(): void {
            var now = Date.now();
            var fs = (now - this.lastFameTime);
            var fps = Math.round(1000 / fs);
            this.lastFameTime = now;
            // 不置 0，在动画的开头及结尾记录此值的差值算出 FPS
            this.allFrameCount++;
            this.frame++;
            if (now > 1000 + this.lastTime) {
            var fps = Math.round((this.frame * 1000) / (now - this.lastTime));
            console.log(`${new Date()} 1S内 FPS：`, fps);
            this.frame = 0;
            this.lastTime = now;
            };
        }

        OnUpdate():void {
            //this.frameTest();
        }
    }
}
