$(document).ready(function(){
  

  var settings = {
    "url": "https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/albums",
    "method": "GET",
    
}

$.ajax(settings).done(function (response) {
  var albumArray = response.items;
  //$('#spot').html(JSON.stringify(response));

      var arrayStuff = albumArray.map(function(obj){
        return obj.name
          //$('#spot').append('<li>'+obj.name+'</li>');
        
      });
 var thing = arrayStuff.filter(function(str){
        return str.indexOf('Avicii') === -1; 
      });


 thing.forEach(function(str){
    $('#spot').append('<li>'+str+'</li>');
 })
      
});


});

