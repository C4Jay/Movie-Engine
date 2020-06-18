import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './About';
import styles from './Home.module.css';
import TextField from '@material-ui/core/TextField';

class Home extends Component {
  render() {
 
    return (
      
        <div className={styles.title}>
        
          <h2>Home</h2>
        <Link to="/about" style={{color : 'white'}}>about</Link>
          
          <div className={styles.field}>
          <TextField
           className={styles.textfield}
            id="filled-basic" label="Filled" variant="filled"
           />
          </div>
          

        </div>
    );
  }
}

export default Home;