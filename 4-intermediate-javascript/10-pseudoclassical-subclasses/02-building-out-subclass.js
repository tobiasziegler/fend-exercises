var Car = function(loc){
    this.loc = loc;
};
Car.prototype.move = function(){
    this.loc++;
};

var Van = function(loc){

}

var zed = new Car(3);
zed.move();

var amy = new Van(9);
amy.move();
