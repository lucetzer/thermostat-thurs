$(document).ready(function() {

  showCity = function(city) {
    $('.city').text(city);
  };

  showWeather = function(weather) {
    $('.weather').html(weather);
  };

  // $('#cityBtn').click(function() {
  //   var city = $('#city').val();
  //   $.getJSON('http://api.openweathermap.org/data/2.5/find?q=' + city +
  //   '&units=metric', function(outcome) {
  //     var city = outcome.list[0].name
  //     var temperature = Math.floor(outcome.list[0].main.temp) + ' °C';
  //     showCity(city);
  //     showWeather(temperature);
  //   });
  // });

  $("#cityBtn").click(function(){
    var city = $('#city').val();
    $.ajax('http://api.openweathermap.org/data/2.5/find?q=' + city + '&units=metric', {
      success: function(data){
        console.log(data);        
        var location = data.list[0].name;
        var temperature = Math.floor(data.list[0].main.temp) + ' °C';
        showCity(location);
        showWeather(temperature);
      }
    });
  });

});
