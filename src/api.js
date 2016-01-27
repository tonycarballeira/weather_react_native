var rootUrl = 'api.openweathermap.org/data/2.5/weather?APPID=d08317194587af3ae0544bc9983a6afa'

var kelvinToF = function(kelvin) {
	return Math.round((kelvin - 273.15) * 1.8 + 32) + ' ˚F'
}

module.exports = function(latitude, longitude) {
	var url = `${rootUrl}&lat=${latitude}&lon=${longitude}`;  //  this is using template strings

	fetch(url)  // this will make request to the api server then come back and preforn the function below
		.then(function(response){
			return response.json() // formats what was received by request into a json promise
		})
		.then(function(json){  //  parse promise for actual usable json data
			return {
				city: json.city,  // city closest to provided latitude and longitude
				temperature: kelvinToF(json.main.temp),
				description: json.weather[0].description
			}
		});
}


// API KEY = d08317194587af3ae0544bc9983a6afa