// var names = ["Andrew B","Andrew","Luke","Michael","Demitri"];
// var item = names[Math.floor(Math.random()*names.length)];

// console.log(item);


//push string to lower case
//split string into its own components
//evaluate compentents to see if they are vowels
//if a vowel push to new array
//compare new array to see if they are equal
//if yes= true
//if no = false
var input = "crappy";
var vowel = ['a','e','i','o','u','y'];
var testThis = input.toLowerCase().split("");
var fun = [];
 for (var i = testThis.length - 1; i >= 0; i--) {
   if (i = vowel){
      fun.push(i);
   }

 };
 console.log(fun)
