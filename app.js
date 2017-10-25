const request = require('request');
const yargs = require('yargs');

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
var address = argv.a;
geocode.geocodeAddress(address, (errorMessage, results) => {
  if(errorMessage)
    console.log(errorMessage);
    else {
      console.log(JSON.stringify(results.address, undefined, 2));
      weather.weather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
        if(errorMessage)
        console.log('Cannot retrieve weather');
        else {
          console.log(`It currently feels like ${weatherResults.feels_like},
            and current temperature is ${weatherResults.current_temperature}`);
        }
      });
    }
});

//249e3630ded49f9f597e8d25020aab52
