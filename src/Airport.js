const MAX_CAPACITY = 3;

function Airport(capacity = MAX_CAPACITY) {

    var hanger = [];
    var capacity = capacity

    this.checkCapcity = function(){
        if ( (hanger.length) >= capacity){
            throw new Error("Hanger is full");
        }
    }

    this.land = function(plane){
        this.checkCapcity();
        hanger.push(plane);
        return plane.land();
    }

    this.take_off = function(plane){
        return plane.airborne();
    }
}

