import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import '../../App.css';
import './landingPage.css';
  
class LandingPage extends Component {
    render () {
        return (
            <Router>
            {/* <div id="container"> */}
            <div className="background"> 
            {/* <div class="layer">
            <p>recommend</p>
          </div> */}
          <Link to="/engine">
          <div id="btn"><span class="noselect">Try it</span> <div id="circle"></div></div>
          </Link>
         
          </div>
          
            {/* </div> */}
            </Router>
        
        )
    }
}

export default LandingPage;