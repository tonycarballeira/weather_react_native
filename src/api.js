var rootUrl = 'api.openweathermap.org/data/2.5/weather?APPID=d08317194587af3ae0544bc9983a6afa'

module.exports = function(latitude, longitude) {
	var url = `${rootUrl}&lat=${latitude}&lon=${longitude}`;  //  this is using template strings
}


// API KEY = d08317194587af3ae0544bc9983a6afa