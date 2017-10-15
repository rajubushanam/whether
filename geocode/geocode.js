const request = require('request');

var geocodeAddress = (address) => {
  var encodedAddress = encodeURIComponent(address);
  request({
    url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
  }, (error, response, body) => {
    if(error)
    {
      console.log('Google Servers not responding');
    }
    else if(body.status === 'ZERO_RESULTS' || body.status === 'INVALID_REQUEST')
    {
      console.log('Wrong Address');
    }
    else if(body.status === 'OK'){
      console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
    }
  });
};

module.exports = {
  geocodeAddress
};
