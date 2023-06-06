import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({id, title, year, summary, poster, genres}) {
    
    return (< div className='movies'>
        <img src={poster} alt={title} title={title} />
        <div className="movie_details">
        <h2 className='movie_title'>{title} ({year})</h2>
        <ul className='movie_genres'>{genres.map(genre => <li key={id} className='movies_genre'>{genre}</li>)}</ul>
        <h3 className='movie_summary'>{summary && summary.length > 300 ? `${summary.slice(0, 300)}...` : summary}</h3>
        </div>
    </div>)
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;