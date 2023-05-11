import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

function UpdateMovieDetails(props) {
    const [movie, setMovie] = useState({
        title: '',
        description: '',
        img: '',
    });

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:8082/api/movies/${id}`)
            .then((res) => {
                setMovie({
                    title: res.data.title,
                    description: res.data.description,
                    img: res.data.img,
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
            title: movie.title,
            description: movie.description,
            img: movie.img,
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
                        <p className='lead text-center'>Update Movie's Details</p>
                    </div>
                </div>

                <div className='col-md-8 m-auto'>
                    <form
                        noValidate
                        onSubmit={onSubmit}
                    >
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
                        <br />

                        <div className='form-group'>
                            <label htmlFor='description'>Description</label>
                            <textarea
                                type='text'
                                placeholder='Description of the Movie'
                                name='description'
                                className='form-control'
                                value={movie.description}
                                onChange={onChange}
                            />
                        </div>
                        <br />

                        <div className='form-group'>
                            <label htmlFor='img'>Image</label>
                            <textarea
                                type='text'
                                placeholder='URL of the movie image'
                                name='img'
                                className='form-control'
                                value={movie.img}
                                onChange={onChange}
                            />
                        </div>
                        <br />

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
