class HOLD_PIPE {

    forward(hold){
        return {
            next:
                hold.freeze ? "END" :
                hold.state === "MISS" ? "IN" :
                "RESPO",
            signature: hold.hold,
            freeze: hold.freeze
        };
    }
}

window.HOLD_PIPE = new HOLD_PIPE();
