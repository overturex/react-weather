import React from 'react';
import WeatherForm from './WeatherForm';
import WeatherList from './WeatherList';
import WeatherService from '../lib/WeatherService';

var WeatherApp = React.createClass({
    getInitialState: function(){

        return {
            items: []
        }
    },
    componentDidMount: function(){
        var cityList = WeatherService.getCityList();
        var items = [];
        var length = cityList ? cityList.length : 0;
        var self = this;

        if(length > 0){

            cityList.forEach(function(city){
                WeatherService.getWeatherByCity(city)
                    .then(function(weather){
                        items.push(weather);
                        self.setState({items: items});
                    });
            });
        }
    },
    addWeatherByCity: function(city){

        var self = this;

        var items = self.state.items;
        var isExist = items.find(function(item){
            return item.name.toUpperCase() == city.toUpperCase();
        });

        if(!isExist) {

            WeatherService.getWeatherByCity(city)
                .then(function (weather) {


                    items.push(weather);
                    self.setState({items: items});
                    WeatherService.saveWeatherList(items);
                });
        }
        else{
            alert('city already exist!');
        }
    },
    render: function(){
        return(
            <div>
                <WeatherForm addWeather={this.addWeatherByCity}/>
                <WeatherList items={this.state.items}/>
            </div>
        );
    }
});

export default WeatherApp;