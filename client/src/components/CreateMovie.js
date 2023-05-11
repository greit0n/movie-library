import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const CreateMovie = (props) => {
    // Define the state with useState hook
    const navigate = useNavigate();
    const [movie, setMovie] = useState({
        id: '',
        imdb_id: '',
        title: '',
        overview: '',
        poster_path: '',
        release_date: '',
        first_air_date: '',
        original_language: '',
        budget: '',
        revenue: '',
        rating_1: '',
        rating_2: '',
    });
    const onChange = (e) => {
        setMovie({ ...movie, [e.target.name]: e.target.value });
    };
    const onSubmit = (e) => {
        e.preventDefault();

        axios
            .post('http://localhost:8082/api/movies', movie)
            .then((res) => {
                setMovie({
                    id: '',
                    imdb_id: '',
                    title: '',
                    overview: '',
                    poster_path: '',
                    first_air_date: '',
                    release_date: '',
                    original_language: '',
                    budget: '',
                    revenue: '',
                    rating_1: '',
                    rating_2: '',
                });

                // Push to /
                navigate('/');
            })
            .catch((err) => {
                console.log('Error in CreatMovie!');
            });
    };

    return (
        <div className='CreateMovie'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8 m-auto'>
                        <br />
                        <Link
                            to='/'
                            className='btn btn-outline-warning float-left'
                        >
                            Show Movie List
                        </Link>
                    </div>
                    <div className='col-md-8 m-auto'>
                        <h1 className='display-4 text-center'>Add Movie</h1>
                        <p className='lead text-center'>Create new movie</p>

                        <form onSubmit={onSubmit}>
                            <div className='form-group'>
                                <label htmlFor='id'>Id</label>

                                <input
                                    type='number'
                                    placeholder='Id of the Movie'
                                    name='id'
                                    className='form-control'
                                    value={movie.id}
                                    onChange={onChange}
                                    required
                                />
                            </div>

                            <div className='form-group'>
                                <label htmlFor='imdb_id'>imDB ID</label>

                                <input
                                    type='text'
                                    placeholder='imDB ID of the Movie'
                                    name='imdb_id'
                                    className='form-control'
                                    value={movie.imdb_id}
                                    onChange={onChange}
                                />
                            </div>
                            {movie.title ? (
                                <div className='form-group'>
                                    <label htmlFor='title'>Title</label>

                                    <input
                                        type='text'
                                        placeholder='Title of the Movie'
                                        name='title'
                                        className='form-control'
                                        value={movie.title}
                                        onChange={onChange}
                                    />
                                </div>
                            ) : (
                                <div className='form-group'>
                                    <label htmlFor='title'>Title</label>

                                    <input
                                        type='text'
                                        placeholder='Title of the Movie'
                                        name='name'
                                        className='form-control'
                                        value={movie.name}
                                        onChange={onChange}
                                    />
                                </div>
                            )}

                            <div className='form-group'>
                                <label htmlFor='overview'>Overview</label>

                                <input
                                    type='text'
                                    placeholder='Overview of the Movie'
                                    name='overview'
                                    className='form-control'
                                    value={movie.overview}
                                    onChange={onChange}
                                />
                            </div>

                            <div className='form-group'>
                                <label htmlFor='poster_path'>Image</label>

                                <input
                                    type='text'
                                    placeholder='Image of the Movie'
                                    name='poster_path'
                                    className='form-control'
                                    value={movie.poster_path}
                                    onChange={onChange}
                                />
                            </div>
                            {movie.release_date ? (
                                <div className='form-group'>
                                    <label htmlFor='release_date'>
                                        Release date
                                    </label>

                                    <input
                                        type='text'
                                        placeholder='Release date of the Movie'
                                        name='release_date'
                                        className='form-control'
                                        value={movie.release_date}
                                        onChange={onChange}
                                    />
                                </div>
                            ) : (
                                <div className='form-group'>
                                    <label htmlFor='release_date'>
                                        Release date
                                    </label>

                                    <input
                                        type='text'
                                        placeholder='Release date of the Movie'
                                        name='first_air_date'
                                        className='form-control'
                                        value={movie.first_air_date}
                                        onChange={onChange}
                                    />
                                </div>
                            )}

                            <div className='form-group'>
                                <label htmlFor='original_language'>
                                    Original language
                                </label>

                                <input
                                    type='text'
                                    placeholder='Original language of the Movie'
                                    name='original_language'
                                    className='form-control'
                                    value={movie.original_language}
                                    onChange={onChange}
                                />
                            </div>

                            <div className='form-group'>
                                <label htmlFor='rating_1'>Eli's rating</label>

                                <input
                                    type='number'
                                    placeholder='Rate the movie from 1/10'
                                    name='rating_1'
                                    className='form-control'
                                    value={movie.rating_1}
                                    onChange={onChange}
                                />
                            </div>

                            <div className='form-group'>
                                <label htmlFor='rating_2'>
                                    Georgi's rating
                                </label>

                                <input
                                    type='number'
                                    placeholder='Rate the movie from 1/10'
                                    name='rating_2'
                                    className='form-control'
                                    value={movie.rating_2}
                                    onChange={onChange}
                                />
                            </div>

                            <input
                                type='submit'
                                className='btn btn-outline-warning btn-block mt-4'
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateMovie;
