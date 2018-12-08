
namespace ut {

    @ut.executeBefore(ut.Shared.UserCodeStart)
    // using to record test duration
    export class Time extends ut.ComponentSystem {
        private static _deltaTime: number = 0;
        private static _time: number = 0;

        static deltaTime(): number {
            return Time._deltaTime;
        }

        static get time (): number{
            return Time._time;
        }
        static set time (value: number) {
            Time._time = value;
        }

        OnUpdate():void {
            let dt = this.scheduler.deltaTime();
            Time._deltaTime = dt;
            // test all time
            Time._time += dt;
        }
    }
}
