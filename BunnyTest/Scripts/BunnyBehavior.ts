/* 
namespace game {

    export class BunnyBehaviorFilter extends ut.EntityFilter {
        node: ut.Core2D.TransformNode;
        position?: ut.Core2D.TransformLocalPosition;
        entity: ut.Entity;
        tag: game.BunnyTag;
        moveMent: game.MoveMent;
        griavity: game.Griavity;
    }

    export class BunnyBehavior extends ut.ComponentBehaviour {

        data: BunnyBehaviorFilter;
        private speedUnit: number = 0.8;
        // ComponentBehaviour lifecycle events
        // uncomment any method you need
        
        // this method is called for each entity matching the BunnyBehaviorFilter signature, once when enabled
        OnEntityEnable(): void {
            game.BunnyManager.count++;

            let localPosition = this.data.position.position;
            localPosition.x = this.data.moveMent.minX + 2;
            localPosition.y = this.data.moveMent.maxY * 0.6;
            this.data.position.position = localPosition;
            // init speed
            this.data.moveMent.speedX = Math.random() * this.speedUnit;
            this.data.moveMent.speedY = (Math.random() * this.speedUnit) - 0.5;
        }
        
        // this method is called for each entity matching the BunnyBehaviorFilter signature, every frame it's enabled
        OnEntityUpdate():void { 
            let localPosition = this.data.position.position;
            let speedX = this.data.moveMent.speedX;
            let speedY = this.data.moveMent.speedY;

            let x = localPosition.x + speedX;
            let y = localPosition.y - speedY;
            speedY += this.data.griavity.gravity;

            if (x > this.data.moveMent.maxX) {
                speedX = -1 * speedX;
                x = this.data.moveMent.maxX;
            } else if (x < this.data.moveMent.minX) {
                speedX = -1 * speedX;
                x = this.data.moveMent.minX;
            }

            if (y < this.data.moveMent.minY) {
                speedY = -0.85 * speedY;
                y = this.data.moveMent.minY;
                if (Math.random() > 0.5) {
                    speedY = speedY - Math.random() * 6.0;
                }
            } else if (y > this.data.moveMent.maxY) {
                speedY = 0.0;
                y = this.data.moveMent.maxY;
            }
            this.data.moveMent.speedX = speedX;
            this.data.moveMent.speedY = speedY;
            // set this.data.position
            localPosition.x = x;
            localPosition.y = y;
            this.data.position.position = localPosition;
        }

        // this method is called for each entity matching the BunnyBehaviorFilter signature, once when disabled
        //OnEntityDisable():void { }
    }
}
 */