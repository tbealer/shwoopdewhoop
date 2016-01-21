$(document).ready(function () {
        var settings = {
  
  "url": "http://jsonip.com/",
  "method": "GET",
  
  }


$.ajax(settings).done(function (response) {
   var ip = response.ip
   $("#IP").append(ip);
  console.log(response);
});

});