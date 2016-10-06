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

WeatherService.saveWeatherList = function(items){

    var cityList = [];
    items.forEach(function(item){
       cityList.push(item.name);
    });


    if(typeof(Storage) !== 'undefined'){
        localStorage.setItem("ReactWeather.CityList", JSON.stringify(cityList));
    }
    else{
        console.log('Sorry! No Web Storage support..')
    }
};

WeatherService.getCityList = function(){

    var cityList = [];

    if(typeof(Storage) !== 'undefined'){
        cityList = JSON.parse(localStorage.getItem("ReactWeather.CityList"));
    }
    else{
        console.log('Sorry! No Web Storage support..')
    }

    return cityList;
};

export default WeatherService;