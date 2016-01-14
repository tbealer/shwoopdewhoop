var pleaseWork = [];


var rdmNum = Math.floor((Math.random()*9999)+1000);
console.log(rdmNum);

var answer = rdmNum.toString().split("");
console.log(answer);
//pleaseWork.push(answer);

var sum = 0
for (var i = 0; i < answer.length; i++) {
   var thing = parseInt(answer [i]);
   pleaseWork.push(thing);
};

for (var j = 0; j < pleaseWork.length; j++) {
  sum+= pleaseWork[j];

};

console.log(thing);
console.log(pleaseWork);
console.log(sum);

//console.log(sum);
//console.log(thing);