import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

function UpdateMovieDetails(props) {
    const [movie, setMovie] = useState({
        id: '',
        imdb_id: '',
        title: '',
        overview: '',
        poster_path: '',
        release_date: '',
        original_language: '',
        budget: '',
        revenue: '',
        rating_1: '',
        rating_2: '',
    });

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:8082/api/movies/${id}`)
            .then((res) => {
                setMovie({
                    id: res.data.id,
                    imdb_id: res.data.imdb_id,
                    title: res.data.title,
                    overview: res.data.overview,
                    poster_path: res.data.poster_path,
                    release_date: res.data.release_date,
                    original_language: res.data.original_language,
                    budget: res.data.budget,
                    revenue: res.data.revenue,
                    rating_1: res.data.rating_1,
                    rating_2: res.data.rating_2,
                });
            })
            .catch((err) => {
                console.log('Error from UpdateMovieDetails');
            });
    }, [id]);

    const onChange = (e) => {
        setMovie({ ...movie, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const data = {
            id: movie.id,
            imdb_id: movie.imdb_id,
            title: movie.title,
            overview: movie.overview,
            poster_path: movie.poster_path,
            release_date: movie.release_date,
            original_language: movie.original_language,
            budget: movie.budget,
            revenue: movie.revenue,
            rating_1: movie.rating_1,
            rating_2: movie.rating_2,
        };

        axios
            .put(`http://localhost:8082/api/movies/${id}`, data)
            .then((res) => {
                navigate(`/show-movie/${id}`);
            })
            .catch((err) => {
                console.log('Error in UpdateMovieDetails!');
            });
    };

    return (
        <div className='UpdateMovieDetails'>
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
                        <h1 className='display-4 text-center'>Edit Movie</h1>
                        <p className='lead text-center'>
                            Update Movie's Details
                        </p>
                    </div>
                </div>

                <div className='col-md-8 m-auto'>
                    <form
                        noValidate
                        onSubmit={onSubmit}
                    >
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

                        <div className='form-group'>
                            <label htmlFor='release_date'>Release date</label>

                            <input
                                type='text'
                                placeholder='Release date of the Movie'
                                name='release_date'
                                className='form-control'
                                value={movie.release_date}
                                onChange={onChange}
                            />
                        </div>

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
                            <label htmlFor='budget'>Budget</label>

                            <input
                                type='number'
                                placeholder='Budget of the Movie'
                                name='budget'
                                className='form-control'
                                value={movie.budget}
                                onChange={onChange}
                            />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='revenue'>Revenue</label>

                            <input
                                type='number'
                                placeholder='Revenue of the Movie'
                                name='revenue'
                                className='form-control'
                                value={movie.revenue}
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
                            <label htmlFor='rating_2'>Georgi's rating</label>

                            <input
                                type='number'
                                placeholder='Rate the movie from 1/10'
                                name='rating_2'
                                className='form-control'
                                value={movie.rating_2}
                                onChange={onChange}
                            />
                        </div>

                        <button
                            type='submit'
                            className='btn btn-outline-info btn-lg btn-block'
                        >
                            Update Movie
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UpdateMovieDetails;
