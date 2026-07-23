class HOLD_FREEZE {

    lock(value){
        return {
            locked: true,
            value
        };
    }

    unlock(value){
        return {
            locked: false,
            value
        };
    }
}

window.HOLD_FREEZE = new HOLD_FREEZE();
