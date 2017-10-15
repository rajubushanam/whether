const request = require('request');
const yargs = require('yargs');

const geocode = require('./geocode/geocode');
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
geocode.geocodeAddress(address);
