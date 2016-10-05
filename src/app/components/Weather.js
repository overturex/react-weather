import React from 'react';

var Weather = React.createClass({
   render: function(){
       return(
           <div className="container-fluid">
               <div className="row">
                   <div className="col-sm-6">{this.props.item.name}</div>
                   <div className="col-sm-6">{this.props.item.main.temp} &#8451;</div>
               </div>
           </div>
       );
   }
});

export default Weather;