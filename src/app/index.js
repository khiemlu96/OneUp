/*var React = require('react');
var ReactDOM = require('react-dom');*/

import React from "react";
import { render } from "react-dom";
import { Header } from "./components/Header";

class App extends React.Component {
	render() {
  	return (
  		<div className="container">
              <div className="row">
                  <div className ="col-xs-10 col-xs-offset-1">
                      <Header/>
                  </div>
              </div>
			</div>
    );
  }
}

render(<App/>, window.document.getElementById("app"));
