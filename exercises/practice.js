var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var vowels = ['a','e','i','o','u'];

var vowelsArray = [];
  
 //  for(var i=0; i<letters.length; i++){
    
 //    for( var j = 0; j<vowels.length;j++){
      
 //      if(letters[i] === vowles[j]){
        
 //        vowelsArray.push(letters[i]);
 //    }
 //  }
 //  } 

  function getVowels(arr){
    arr.filter(function(letter){
      return isVowel(letter);
    })
    for(var i =0; i<letters.length; i++){
     if( isVowel(arr[i]);
    };

  }

  function isVowel(letter){
    for (var i = 0 ; i < vowels.length; i++) {
      if(vowels[i] === letter){
        return true;
      }
    }
    return false;

  }

  console.log(vowelsArray);