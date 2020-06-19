import React, { Component } from 'react';
import styles from './About.module.css'

class About extends Component {
  render() {
    return (
        <div className={styles.main}>
          <div className={styles.title}>
          <h2 style={{color : 'white'}}>About</h2>
          </div>
          <div className={styles.box}>
          <div className={styles.inner}>
          <h2>Movie 1</h2>
          <p>This is a nice movie from the 90's with bruce willis.Check it out on netflix</p>

          </div>
          </div>
        </div>
    );
  }
}

export default About;