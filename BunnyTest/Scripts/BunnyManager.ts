
namespace game {

    /** New System */
    export class BunnyManager {

        private static mainGroup: string = 'game.Bunny';
        private static bunnyGroup: string = 'game.bunnyStuff';
        // bunny count;
        public static count: number = 0;

        static restart (world: ut.World) {
            this.newTest(world);
        };

        static newTest (world: ut.World) {
            // reset test time
            ut.Time.time = 0;
            this.count = 0;
            // clear the all 
            ut.EntityGroup.destroyAll(world, this.mainGroup);
            ut.EntityGroup.destroyAll(world, this.bunnyGroup);
            // start test
            ut.EntityGroup.instantiate(world, this.mainGroup);
        }
    }
}
