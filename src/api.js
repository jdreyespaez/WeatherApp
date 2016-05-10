var rootUrl = 'http://api.openweathermap.org/data/2.5/weather?APPID=8923642cc6a019b215609d37851e0e9d';

var kelvinToF = function(kelvin) {
  return Math.round((kelvin- 237.15)) + ' ºC'
};

module.exports = function(latitude, longitude) {
  var url = `${rootUrl}&lat=${latitude}&lon=${longitude}`;

  return fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(json){
      return {
        city: json.name,
        temperature: kelvinToF(json.main.temp),
        description: json.weather[0].description
      }
    });
}
