import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const MovieCard = (props) => {
    const movie = props.movie;

    return (
        <div className='card-container'>
            <img
                src={movie.poster_path}
                alt='Movies'
            />
            <div className='desc'>
                <h2>
                    <Link to={`/show-movie/${movie._id}`}>{movie.title}</Link>
                </h2>
                <p>{movie.release_date}</p>
                <p>Eli's rating: 1/{movie.rating_1}</p>
                <p>Georgi's rating: 1/{movie.rating_2}</p>
            </div>
        </div>
    );
};

export default MovieCard;
