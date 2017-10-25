var request = require('request');

var weather = (lat, lng, callback) => {
  request({
  url:`https://api.darksky.net/forecast/249e3630ded49f9f597e8d25020aab52/${lat},${lng}`,
  json: true
}, (error, response, body) => {
  if(!error && response.statusCode === 200)
  {
    callback(undefined, {
      current_temperature: body.currently.temperature,
      feels_like: body.currently.apparentTemperature
  });
  }
  else{
    callback('Unable to fetch weather');
  }

  //console.log(response);
});
};

module.exports = {
  weather
};
