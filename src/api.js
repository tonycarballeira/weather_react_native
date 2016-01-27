var rootUrl = 'api.openweathermap.org/data/2.5/weather?APPID=d08317194587af3ae0544bc9983a6afa'

var kelvinToF = function(kelvin) {
	return Math.round((kelvin - 283.15) * 1.8 + 32)
}

module.exports = function(latitude, longitude) {
	var url = `${rootUrl}&lat=${latitude}&lon=${longitude}`;  //  this is using template strings

	fetch(url)  // this will make request to the api server then come back and preforn the function below
		.then(function(response){
			return response.json() 
		})
		.then(function(json){
			return {
				city: json.city,  // city closest to provided latitude and longitude
				temperature: kelvinToF(json.main.temp),
				description:
			}
		})
}


// API KEY = d08317194587af3ae0544bc9983a6afa