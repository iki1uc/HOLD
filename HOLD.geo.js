import { HOLD_STATE } from "./HOLD.state.js";

export const HOLD_constellation_geo = {
    map() {
        return {
            id: "HOLD",
            freeze: HOLD_STATE.store,
            state: HOLD_STATE.store,
            pipe: "active",
            result: HOLD_STATE.get("HOLD_result"),
            field: "HOLD",
            vector: "state",
            hub: "core"
        };
    }
};
