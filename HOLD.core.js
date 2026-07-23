class HOLD {

    constructor(){
        this.input = null;
        this.state = "INIT";
        this.freeze = false;
        this.output = null;
    }

    enter(value){
        this.input = value;
        this.state = "RECEIVED";
    }

    setFreeze(flag){
        this.freeze = flag;
    }

    compute(){
        let result = this.freeze ? this.input : (this.input % 999);

        this.output = {
            input: this.input,
            freeze: this.freeze,
            hold: result,
            state: this.state
        };

        return this.output;
    }
}

window.HOLD = new HOLD();
