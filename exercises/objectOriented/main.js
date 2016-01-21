// var person = {name:'Tommy',role: 'student'}

// var TomTemplate = function(inches){
//   this.firstName = 'Tommy';
//   this.lastName = 'Bealer';
//   this.energy = 50;
//   this.height = inches;
//   this.sayHeight = function(){
//     return 'I am'+ (this.height/12)+ 'feet tall'
//   }
// }

// var Human = function (firstName, lastName){
//   this.firstName = firstName;
//   this.lastName = lastName; 
// }

// var tommy = new Human ('Tommy','Bealer')

// console.log(tommy.sayHeight(56));

// var Chapstick = function(){
//   this.color = 'Yellow';
//   this.volume = 100;
//   this.capped = true;
//   this.uncap = function(){
//     this.capped = false;
//   }
//   this.cap = function(){
//     this.capped = true;
//   }
//   this.change = function(color){
//     this.color = color;
//   }

// }

// var myChapstick = new Chapstick()

// myChapstick.uncap = function(){
//   this.capped = false;
// }
// myChapstick.uncap();
// myChapstick.change('blue');

// console.log(myChapstick)


var Watch = function(options){
  this.metal = options.metal;
  this.analog = options.analog;
  this.weight = options.weight;
  this.band = options.band;
  this.hour = options.hour;
  this.thing = function(hour){
    return hour;
  }
};
 
var tommmysWatch = {
  metal: 'gold',
  analog: true,
  weight: 'lite',
  band: 'chain',
  hour: 4,
};

 var boop = new Watch(tommmysWatch);
  boop.thing= function(hour){
    return 5;
  }
console.log(boop);
console.log(boop.thing(5));




















