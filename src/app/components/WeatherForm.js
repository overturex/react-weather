import React from 'react';

var WeatherForm = React.createClass({
    getInitialState: function(){
        return {
            city:''
        };
    },
    onChange: function(e){
        this.setState({city: e.target.value});
    },
    addWeather: function(e){
        e.preventDefault();
        this.props.addWeather(this.state.city);
        this.setState({city:''});
    },
    render: function () {
        return (
            <form className="form-horizontal" onSubmit={this.addWeather}>
                <div className="form-group">
                    <div className="col-sm-10">
                        <input className="form-control" onChange={this.onChange} value={this.state.city} placeholder="city name"/>
                    </div>
                    <div className="col-sm-2">
                        <button type="submit" className="btn btn-default">search</button>
                    </div>
                </div>
            </form>
        );
    }
});

export default WeatherForm;