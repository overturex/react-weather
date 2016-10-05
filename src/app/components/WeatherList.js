import React from 'react';
import Weather from './Weather';

var WeatherList = React.createClass({
    render: function(){

        var newWeather = function(weather, index){
            return(
                <tr key={index}>
                    <td>
                        <Weather item={weather}/>
                    </td>
                </tr>
            );
        };

        return(
            <table className="table table-striped">
                <tbody>
                    {this.props.items.map(newWeather)}
                </tbody>
            </table>
        );
    }
});

export default WeatherList;