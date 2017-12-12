if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function (position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var link = 'https://fcc-weather-api.glitch.me/api/current?lat=' + lat + '&lon=' + lon;

    $.getJSON(link, function (data) {
      var tempF = Math.round(data.main.temp) * (9 / 5) + 32;
      var tempC = Math.round(data.main.temp);
      $('#area').text(data.name + ', ' + data.sys.country);
      $('#icons').html('<img src=\'' + data.weather[0].icon + '\' />');
      $('#temperF').text(tempF + ' F');
      $('#temperC').text(tempC + ' C');
      $('#description').html('' + data.weather[0].description);
      $('#temperC').hide();
    });
  });
} else {
  $('#data').text("Please enable location services.");
}

var changeF = function changeF() {
  $('#temperC').hide();
  $('#temperF').show();
};

var changeC = function changeC() {
  $('#temperF').hide();
  $('#temperC').show();
};