export const HOLD_OUTPUT = {
    dump() {
        return {
            state: HOLD_STATE.store,
            freeze: "active",
            pipe: "ready",
            result: HOLD_STATE.get("HOLD_result")
        };
    },

    log() {
        console.log("HOLD → OUTPUT");
        console.log(JSON.stringify(this.dump(), null, 4));
    }
};
