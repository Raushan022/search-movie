import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { API_URL } from "../context";

const SingleMovie = () => {
  const { id } = useParams();

  const [singleMovie, setsingleMovie] = useState("");
  console.log(singleMovie);

  const getMovieById = async (url) => {
    try {
      const res = await fetch(`${url}&i=${id}`);
      const data = await res.json();
      setsingleMovie(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieById(API_URL);
  }, []);

  return (
    <section className="movie-section">
      <div className="movie-card">
        <figure>
          <img src={singleMovie.Poster} alt="" />
        </figure>
        <div>
          <p className="card-text">{singleMovie.Title}</p>
          <p className="card-text">{singleMovie.Released}</p>
          <p className="card-text">{singleMovie.Genere}</p>
          <p className="card-text">{singleMovie.imdbRating}</p>
          <p className="card-text">{singleMovie.Country}</p>
          <NavLink to="/">Go Back</NavLink>
        </div>
      </div>
    </section>
  );
};

export default SingleMovie;
