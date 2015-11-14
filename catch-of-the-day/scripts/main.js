import React from 'react';
import ReactDOM from 'react-dom';

/*
  StorePicker
  WIll let us mak <StorePicker/>
 */

 var StorePicker = React.createClass({
  render: function() {
    return (
      <form className="store-selector">
        <h2>Please Enter A Store</h2>
        <input type="text" ref="storeId" required/>
        <input type="Submit"/>
      </form>
    )
  }
 });

 ReactDOM.render(<StorePicker/>, document.querySelector('#main'));