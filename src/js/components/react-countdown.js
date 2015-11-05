'use strict';
var React = require('react');
var Countdown = React.createClass({
  getInitialState: function(){
    return {time: this.props.min*60}
  },
  update: function(){
    var newTime = this.state.time - 1;
    console.log(newTime);
    this.setState({time:newTime});
    if(this.state.time ===0){
      console.log("clear!!!!");
      clearInterval(this.decr);
      this.props.afterUnmount

    }
  },
  render: function(){
  var divStyle = {
    "text-align":"center",
    "font-size": 10,
    "text-shadow": "1px 1px 2px #000000",
    padding: 10,
    color: "white",
    position:"fixed",
    top:16,
    right: 16,
    height:"auto",
    width:80,
    "background-color": "rgba(0,0,3,0.3)",
    "font-family": "Courier New"
  };
  var divStyle2 = {
    "text-align":"center",
    "font-size": 10,
    padding: 10,
    color: "rgba(195,0,0,1)",
    "text-shadow": "1px 1px 2px #000000",
    position:"fixed",
    top:16,
    right: 16,
    height:"auto",
    width: 80,
    "background-color": "rgba(0,0,3,0.3)",
    "font-family": "Courier New"
  };
  var promptStyle = {
    "text-align":"center",
    "font-size": 10,
    "text-shadow": "1px 1px 2px #000000",
    padding: 10,
    color: "white",
    position:"fixed",
    top:"30%",
    right: "25%",
    height:"30%",
    width:"50%",
    "background-color": "rgba(0,0,3,0.8)",
    "font-family": "Courier New",
    "justify-content":"center",
    "align-items":"center",
    display:"flex"

  };

  var m = Math.floor(this.state.time /60);
  var s = this.state.time %60;

  if(this.state.time>59){
    return(
      <div style = {divStyle}>
        <h1>{m,"m ",s,"s"}</h1>
      </div>
    )
  }else if(this.state.time>0){
    return(
      <div style = {divStyle2}>
        <h1>{s,"s"}</h1>
      </div>
    )
  }else{
    return(
      <div style = {promptStyle}>
        <h1>{"Message: ", this.props.msg}</h1>
        <button onClick={this.props.bringTheFunc} >OK</button>
      </div>
    )
  }
  },
  componentDidMount: function(){
    this.decr = setInterval(this.update,1000)
  },
  componentWillUnmount: function(){
    console.log("unMounted!!!!!")
    this.props.afterUnmount
  }
})

module.exports = Countdown
