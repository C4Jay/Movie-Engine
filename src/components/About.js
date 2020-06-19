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
        movie: response.data,
        Title: response.data.Title,
        Plot: response.data.Plot
      })
    })
  }
  render() {
    /* let list;
    if(this.state.movies) {
      list = this.state.movies.map(movie => {
        return <div className={styles.box}>
        <div className={styles.inner}>
        <h2>{movie.Title}</h2>
        <p>{movie.Plot}</p>
  
        </div>
        </div>
      })
    } */
    

    return (
        <div className={styles.main}>
          <div className={styles.title}>
          <h1 style={{color : 'white'}}>About</h1>
          </div>
          {/* {list} */}
         {/*  <div className={styles.box}>
        <div className={styles.inner}>
        <h2>{this.state.Title}</h2>
        <p>{this.state.Plot}</p>
  
        </div>
        </div> */}
        <div className={styles.box2}>
        <div className={styles.inner2}>
          <h2>{this.state.Title}</h2>
          <p>{this.state.Plot}</p>
          </div>
        </div>
          
        </div>
    );
  }
}

export default About;