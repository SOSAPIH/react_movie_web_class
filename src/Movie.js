import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({id, poster, title, year, genres, summary}) {
    return (
        <div className='movie_all'>
            <img src={poster} alt={title} title={title} />
            <div className='movie_data'>
                <h3 className='movie_title'>{title} ({year})</h3>
                <ul className='genres'>
                    {genres.map((genre, index) => <li key={index} className='genre'>{genre}</li>)}
                </ul>
                <p className='movie_summary'>{summary && summary.length > 300 ? summary.slice(0, 300) : summary
                }</p>
            </div>
        </div>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
}

export default Movie;