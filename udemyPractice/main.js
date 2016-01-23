// document.write("Hello world from Javascript")
// var userName = "Tommy Bealer";

// document.write("<br/>")
// document.write(userName);

function sayHi() {
  document.getElementById("fun").innerHTML ="Hi";
}

function addThings(x,y){
  var x = prompt("What is your favorite number" + "");
  var y = prompt("What is your least favorite number" + "");
  var sum = x+y;
  return sum;
}