import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const MovieCard = (props) => {
    const movie = props.movie;

    const stars_rating_1 = () => {
        let stars = [];

        for (let i = 1; i <= movie.rating_1; i++) {
            stars.push(
                <img
                    style={{ width: '25px' }}
                    alt='star'
                    src='https://www.freepnglogos.com/uploads/star-png/stars-png-images-star-clipart-images-icons-37.png'
                    key={i}
                />
            );
        }

        return stars;
    };

    const stars_rating_2 = () => {
        let stars = [];

        for (let i = 1; i <= movie.rating_2; i++) {
            stars.push(
                <img
                    style={{ width: '25px' }}
                    alt='star'
                    src='https://www.freepnglogos.com/uploads/star-png/stars-png-images-star-clipart-images-icons-37.png'
                    key={i}
                />
            );
        }

        return stars;
    };

    return (
        <div className='card-container'>
            <img
                src={movie.poster_path}
                alt='Movies'
            />
            <div className='desc'>
                <h2>
                    <Link to={`/show-movie/${movie._id}`}>
                        {movie.title ?? movie.name}
                    </Link>
                </h2>
                <p>{movie.release_date ?? movie.first_air_date}</p>
                <p>Eli's rating:</p>
                <p>{stars_rating_1()}</p>
                <p>Georgi's rating:</p>
                <p>{stars_rating_2()}</p>
            </div>
        </div>
    );
};

export default MovieCard;
