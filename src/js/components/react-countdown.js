'use strict';
var React = require('react');
var Countdown = React.createClass({
  //var time= 100;
  getInitialState: function(){
    return {time:4}
  },
  update: function(){
    var newTime = this.state.time - 1;
    console.log(newTime);
    this.setState({time:newTime})
    if(this.state.time ===0){
      console.log("clear!!!!");
      clearInterval(this.decr)
    }
  },

  componentWillMount: function(){
    this.setState ({subtract: 1})
  },

  render: function(){
  var divStyle = {
    color: "red",
    position:"fixed",
    top:20,
    right: 20,
    height:50,
    width:100,
    background: "black",
  };
    return(
      <div style = {divStyle}>
        <h1>{"Time:",this.state.time, "s"}</h1>
      </div>
    )
  },
  componentDidMount: function(){
    this.decr = setInterval(this.update,1000)
  },

  componentWillUnmount: function(){
    console.log("im in component will unmount");

  }
})

module.exports = Countdown
