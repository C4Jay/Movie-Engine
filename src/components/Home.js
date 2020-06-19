import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './About';
import styles from './Home.module.css';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

import MenuItem from '@material-ui/core/MenuItem';

class Home extends Component {

  state = {
    age: 'age'
  }

   handleChange = (event) => {
    this.setState({
      age: event.target.value});
  };


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
          
          
          {/* <InputLabel className={styles.label} id="demo-simple-select-label">Age</InputLabel> */}
        <p>age</p>
        <Select
        className={styles.select} 
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={this.state.age}
          onChange={this.handleChange}
          placeholder="age"
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
          

        </div>
    );
  }
}

export default Home;