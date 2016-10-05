import $ from 'jquery';

var WeatherService = {};
WeatherService.API_KEY = 'e11af50148682cadb8b81ee1e1f1df4d';
WeatherService.API_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&APPID=' + WeatherService.API_KEY;
WeatherService.ICON_URL = 'http://openweathermap.org/img/w/';

WeatherService.getWeatherByCity = function(city){

    var deferred = $.Deferred();

    $.get(WeatherService.API_URL + '&q=' + city, function(result){
        deferred.resolve(result);
    });

    return deferred.promise();
};

export default WeatherService;