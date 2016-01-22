$(document).ready(function () {
        var settings = {
  
  "url": "http://jsonip.com/",
  "method": "GET",
  dataType : "jsonp"
  }


$.ajax(settings).done(function (response) {
   var ip = response.ip
   $("#IP").append(ip);
  console.log(response);
});
var latLong={
  "url": "https://freegeoip.net/json/",
  "method": "GET",
}

$.ajax(latLong).done(function (response) {
  var lat = response.latitude;
  var lon = response.longitude;
  $("#longitude").append(lon);
  $("#latitude").append(lat);
 console.log(response);

});
});