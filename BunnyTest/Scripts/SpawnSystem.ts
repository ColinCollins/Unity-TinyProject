
namespace game {

    /** New System */
    @ut.executeAfter(ut.Shared.InputFence)
    @ut.requiredComponents(game.Spawner)
    export class SpawnSystem extends ut.ComponentSystem {
        OnUpdate():void {
            let dt = ut.Time.deltaTime();
            if (ut.Core2D.Input.getKeyDown(ut.Core2D.KeyCode.R)) {
                BunnyManager.restart(this.world);
            }
            this.world.forEach([game.Spawner], (spawner) => {
                if (!ut.Core2D.Input.getMouseButtonDown(0) && !this.processTouchInput()) {
                    return;
                }
                for (let i = 0; i < spawner.bunnyCount; i++) {
                    let entityGroup = ut.EntityGroup.instantiate(this.world, spawner.bunnyGroup);
                    //console.log(entityGroup);
                    // record the entity number
                    game.BunnyManager.count += 5;
                }
            });
        }
        // PC not support touch event
        processTouchInput (): boolean {
            if (ut.Core2D.Input.isTouchSupported()) {
                if (ut.Core2D.Input.touchCount() > 0) {
                    return true;
                }
            }
            return false;
        }
    }
}
