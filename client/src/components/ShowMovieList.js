import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import "./showMovieList.css";

function ShowMovieList() {
    const [movies, setMovies] = useState([]);
    const [searchMovies, setSearchMovies] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8082/api/movies")
            .then((res) => {
                setMovies(res.data);
            })
            .catch((err) => {
                console.log("Error from ShowMovieList");
            });
    }, []);

    const movieList =
        movies.length === 0
            ? "there is no movie record!"
            : movies.map((movie, k) => <MovieCard movie={movie} key={k} />);

    const onChange = (e) => {
        axios
            .get(
                "https://api.themoviedb.org/3/search/multi?api_key=056e734e28201f2ab1e4b8369b0b5bb7&query=" +
                e.target.value
            )
            .then((res) => {
                setSearchMovies(res?.data.results);
            })
            .catch((err) => {
                console.log("Error from ShowMovieList");
            });
    };

    const addMovie = (movie) => {
        let searchMovie = { ...movie };
        searchMovie.poster_path =
            "https://image.tmdb.org/t/p/w200/" + searchMovie.poster_path;

        console.log(searchMovie);

        axios
            .post("http://localhost:8082/api/movies", searchMovie)
            .then((res) => {
                // Push to /
                axios
                    .get("http://localhost:8082/api/movies")
                    .then((res) => {
                        setMovies(res.data);
                    })
                    .catch((err) => {
                        console.log("Error from ShowMovieList");
                    });
            })
            .catch((err) => {
                console.log("Error in CreateMovie!");
            });
    };

    const handleBlur = (e) => {
        e.target.value = "";
        /* axios
          .get(
            "https://api.themoviedb.org/3/search/multi?api_key=056e734e28201f2ab1e4b8369b0b5bb7&query=" +
              e.target.value
          )
          .then((res) => {
            setSearchMovies(res?.data.results);
          })
          .catch((err) => {
            console.log("Error from ShowMovieList");
          });*/
    };

    return (
        <div className="ShowMovieList">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <br />
                        <h2 className="display-4 text-center">Movie List</h2>
                    </div>

                    <div className={"search-wrapper col-md-12"}>
                        <label htmlFor="search" className="search">
                            Search
                        </label>

                        <input
                            className="input"
                            name="search"
                            type="text"
                            onChange={onChange}
                            onBlur={handleBlur}
                        ></input>
                    </div>

                    <div className="search-movie-container">
                        {searchMovies.map((item, i) => {
                            return (
                                <div className="search-movie" key={item.id}>
                                    <div className="img-wrapper">
                                        <img
                                            style={{ width: "100px" }}
                                            src={
                                                "https://image.tmdb.org/t/p/w200/" + item.poster_path
                                            }
                                            alt="img"
                                            onClick={() => {
                                                addMovie(item);
                                            }}
                                        />
                                    </div>
                                    <span>{item.title}</span>
                                </div>
                            );
                        })}
                    </div>

                    <div className="col-md-11">
                        <Link
                            to="/create-movie"
                            className="btn btn-outline-warning float-right"
                        >
                            + Add New Movie
                        </Link>
                        <br />
                        <br />
                        <hr />
                    </div>
                </div>

                <div className="list">{movieList}</div>
            </div>
        </div>
    );
}

export default ShowMovieList;
