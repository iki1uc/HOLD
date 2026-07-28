export const HOLD_SPLIT = {
    state() {
        return HOLD_STATE.store;
    },
    freeze() {
        return { frozen: true };
    },
    pipe() {
        return { pipe: "active" };
    }
};
