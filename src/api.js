var rootUrl = 'http://api.openweathermap.org/data/2.5/weather?APPID=d08317194587af3ae0544bc9983a6afa'

var kelvinToF = function(kelvin) {
	return Math.round((kelvin - 273.15) * 1.8 + 32) + ' ˚F'
}

module.exports = function(latitude, longitude) {  
	var url = `${rootUrl}&lat=${latitude}&lon=${longitude}`;  
	console.log(url);

	return fetch(url)                                                            
		.then(function(response){
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


// API KEY = d08317194587af3ae0544bc9983a6afa