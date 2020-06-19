import React, { Component } from 'react';
import styles from './About.module.css'
import axios from 'axios';

var moviesresponse ={}

class About extends Component {
  state = {
    movie: {},
    Title: '',
    Plot: ''
  }

  componentDidMount () {
    axios.get('http://www.omdbapi.com/?apikey=6874092e&i=tt1285016')
    .then(response => {
      console.log(response.data)
      console.log(response.data.Title)
      console.log(response.data.Plot)
      /* moviesresponse = response.data
      console.log(moviesresponse) */
      this.setState({
        movie: response.data
      })
    })
  }
  render() {
    
    

    return (
        <div className={styles.main}>
          <div className={styles.title}>
          <h1 style={{color : 'white'}}>About</h1>
          </div>
          
        <div className={styles.box2}>
        <div className={styles.inner2}>
        <img src={this.state.movie.Poster}></img>
          <h2>{this.state.movie.Title}</h2>
          <p>{this.state.movie.Plot}</p>
          <h3>Cast</h3>
          <p>{this.state.movie.Actors}</p>
          </div>
        </div>
          
        </div>
    );
  }
}

export default About;