var React = require('react');
var Header = require('./Header.js');
var Footer = require('./Footer.js');
var List = require('./List.js');
var Listtitle = require('./List-Title.js');
var Newitem = require('./Newitem.js');
var ScrollToTop = require('react-scroll-up');
var Countdown = require('./react-countdown.js');
var App = React.createClass({

afterTimeOut : function(){
  console.log("we have unmounted the react horse");
},

  render: function () {
    var listItems = {
      fridgeItems:[{name:"banana",exp:"22/10/2015",owner:'Sohil'},{name:"banana",exp:"22/10/2015",owner:'Sohil'},{name:"banana",exp:"22/10/2015",owner:'Sohil'},{name:"banana",exp:"22/10/2015",owner:'Sohil'}]
    };
    var listtitle = {
      name:'Name',
      expiry:'Expiry',
      owner:'Owner'
    };
    return(
      <div className='app-container'>
        <Header title='Fridge'/>
        <Newitem/>
        <Listtitle {...listtitle}/>
        <List {...listItems}/>
        <Countdown min = {0.1} msg ="Close the bloody fridge" afterUnmount = {this.afterUnmount}/>
        <Footer title="Thank You For Visiting The Fridge"/>
      </div>
    );
  }
});

module.exports = App;
