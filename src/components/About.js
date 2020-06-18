import React, { Component } from 'react';
import styles from './About.module.css'

class About extends Component {
  render() {
    return (
        <div className={styles.main}>
          <h2 style={{color : 'white'}}>About</h2>
        </div>
    );
  }
}

export default About;