function Weather(){

    var type = ["stormy", "sunny", "cloudy", "rain"]

    this.setWeather = function(){
       var rando = Math.floor(Math.random() *  4 );
       return type[rando];
    }
}