const request = require('request');
const yargs = require('yargs');
const axios = require('axios');

const geocode = require('./geocode/geocode');
const weather = require('./weatherapi/weatherapi');
const argv = yargs
.options({
  a: {
    demand: true,
    alias: 'address',
    describe: 'Address to fetch weather',
    string: true
  }
})
.help()
.alias('help', 'h')
.argv;


var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeUrl).then((response) => {
  var lat = response.data.results[0].geometry.location.lat;
  var lng = response.data.results[0].geometry.location.lng;
  var weatherUrl = `https://api.darksky.net/forecast/249e3630ded49f9f597e8d25020aab52/${lat},${lng}`;
  console.log(response.data.results[0].formatted_address);
  return axios.get(weatherUrl);
}).then((response) => {
  var temperature = response.data.currently.temperature;
  var feels_like = response.data.currently.apparentTemperature;
  console.log(`Actual temperature is ${temperature} and feels like ${feels_like}`);
})
.catch((e) => {
  console.log(e);
});
//249e3630ded49f9f597e8d25020aab52
