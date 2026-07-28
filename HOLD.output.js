import { HOLD_STATE } from "./HOLD.state.js";

export const HOLD_constellation_output = {
    dump() {
        return {
            state: HOLD_STATE.store,
            timestamp: Date.now(),
            constellation: "HOLD.output"
        };
    },

    log() {
        console.log("HOLD → OUTPUT");
        console.log(JSON.stringify(this.dump(), null, 4));
    }
};
