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
    addWeatherByCity: function(city){

        var self = this;

        WeatherService.getWeatherByCity(city)
            .then(function(weather){
                var items = self.state.items;
                items.push(weather);
                self.setState({items: items});
            });
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