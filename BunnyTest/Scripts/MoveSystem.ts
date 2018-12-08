
namespace game {

    export class MoveSystem extends ut.ComponentSystem {
        OnUpdate():void {
            this.world.forEach([ut.Core2D.TransformLocalPosition, game.BunnyTag, game.MoveMent, game.Griavity], this.CalculatePosition.bind(this));
        }

        CalculatePosition (position, tag, moveMent, griavity): void {
            if (!tag.init) {
                this.init(position, moveMent);
                tag.init = true;
            }

            let localPosition = position.position;
            let speedX = moveMent.speedX;
            let speedY = moveMent.speedY;

            let x = localPosition.x + speedX;
            let y = localPosition.y - speedY;
            speedY += griavity.gravity;

            if (x > moveMent.maxX) {
                speedX = -1 * speedX;
                x = moveMent.maxX;
            } else if (x < moveMent.minX) {
                speedX = -1 * speedX;
                x = moveMent.minX;
            }

            if (y < moveMent.minY) {
                speedY = -0.85 * speedY;
                y = moveMent.minY;
                if (Math.random() > 0.5) {
                    speedY = speedY - Math.random() * 6.0;
                }
            } else if (y > moveMent.maxY) {
                speedY = 0.0;
                y = moveMent.maxY;
            }
            moveMent.speedX = speedX;
            moveMent.speedY = speedY;
            // set position
            localPosition.x = x;
            localPosition.y = y;
            position.position = localPosition;
        }

        init (position: ut.Core2D.TransformLocalPosition, moveMent: game.MoveMent): void {
            let speedUnit: number = 0.8;
            let localPosition = position.position;
            localPosition.x = moveMent.minX + 2;
            localPosition.y = moveMent.maxY * 0.6;
            position.position = localPosition;
            // init speed
            moveMent.speedX = Math.random() * speedUnit;
            moveMent.speedY = (Math.random() * speedUnit) - 0.5;
        }
    }
}
