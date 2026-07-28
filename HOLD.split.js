import { HOLD_STATE } from "./HOLD.state.js";

export const HOLD_constellation_split = {
    state() {
        return HOLD_STATE.store;
    },
    freeze() {
        return { freeze: true };
    },
    pipe() {
        return { pipe: "active" };
    }
};
