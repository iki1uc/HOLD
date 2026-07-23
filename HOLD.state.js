class HOLD_STATE {

    detect(value){
        if(value === null) return "MISS";
        if(value === undefined) return "MISS";
        if(value < 0) return "FAIL";
        return "HOLD";
    }
}

window.HOLD_STATE = new HOLD_STATE();
