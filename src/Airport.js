function Airport() {

    var hanger = [];
    const MAX_CAPACITY = 3;

    this.checkCapcity = function(){
        if ( (hanger.length) >= MAX_CAPACITY){
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

