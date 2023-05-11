import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

function ShowMovieDetails(props) {
    const [movie, setMovies] = useState({});

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:8082/api/movies/${id}`)
            .then((res) => {
                setMovies(res.data);
            })
            .catch((err) => {
                console.log('Error from ShowMovieDetails');
            });
    }, [id]);

    const onDeleteClick = (id) => {
        axios
            .delete(`http://localhost:8082/api/movies/${id}`)
            .then((res) => {
                navigate('/');
            })
            .catch((err) => {
                console.log('Error form ShowMovieDetails_deleteClick');
            });
    };

    const MovieItem = (
        <div>
            <table className='table table-hover table-dark'>
                <tbody>
                    <tr>
                        <th scope='row'>1</th>
                        <td>Id</td>
                        <td>{movie.id}</td>
                    </tr>
                    <tr>
                        <th scope='row'>2</th>
                        <td>imDB ID</td>
                        <td>{movie.imdb_id}</td>
                    </tr>
                    <tr>
                        <th scope='row'>3</th>
                        <td>Title</td>
                        <td>{movie.title ?? movie.name}</td>
                    </tr>
                    <tr>
                        <th scope='row'>4</th>
                        <td>Overview</td>
                        <td>{movie.overview}</td>
                    </tr>
                    <tr>
                        <th scope='row'>5</th>
                        <td>Image</td>
                        <td>{movie.poster_path}</td>
                    </tr>
                    <tr>
                        <th scope='row'>6</th>
                        <td>Release Date</td>
                        <td>{movie.release_date ?? movie.first_air_date}</td>
                    </tr>
                    <tr>
                        <th scope='row'>7</th>
                        <td>Original language</td>
                        <td>{movie.original_language}</td>
                    </tr>
                    <tr>
                        <th scope='row'>8</th>
                        <td>Eli's rating</td>
                        <td>{movie.rating_1}</td>
                    </tr>
                    <tr>
                        <th scope='row'>9</th>
                        <td>Georgi's rating</td>
                        <td>{movie.rating_2}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

    return (
        <div className='ShowMovieDetails'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-10 m-auto'>
                        <br /> <br />
                        <Link
                            to='/'
                            className='btn btn-outline-warning float-left'
                        >
                            Show Movie List
                        </Link>
                    </div>
                    <br />
                    <div className='col-md-8 m-auto'>
                        <h1 className='display-4 text-center'>
                            Movie's Record
                        </h1>
                        <p className='lead text-center'>View Movie's Details</p>
                        <hr /> <br />
                    </div>
                    <div className='col-md-10 m-auto'>{MovieItem}</div>
                    <div className='col-md-6 m-auto'>
                        <button
                            type='button'
                            className='btn btn-outline-danger btn-lg btn-block'
                            onClick={() => {
                                onDeleteClick(movie._id);
                            }}
                        >
                            Delete Movie
                        </button>
                    </div>
                    <div className='col-md-6 m-auto'>
                        <Link
                            to={`/edit-movie/${movie._id}`}
                            className='btn btn-outline-info btn-lg btn-block'
                        >
                            Edit Movie
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShowMovieDetails;
