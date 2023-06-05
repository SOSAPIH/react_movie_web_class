import React, {Component} from 'react';
import axios from 'axios';
import Movie from './Movie';
import "./App.css"

class App extends Component {
  state = {
    isLoading: true,
    movies: [],
  }

  getMovies = async() => {
    const {data: {data: {movies}}} = await axios.get("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=rating");
    console.log(movies);
    this.setState({movies, isLoading: false});
  }

  componentDidMount() {
    this.getMovies();
  }
  
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="section">
        <div>{isLoading ? (<div className='loader'>
          <span className='loader-text'>Loading...</span>
        </div>): movies.map(movie => 
          <Movie key={movie.id} id={movie.id} genres={movie.genres} title={movie.title} year={movie.year} poster={movie.medium_cover_image} summary={movie.summary} />  
        )}</div>
      </section>
    )
  }
}

export default App;
