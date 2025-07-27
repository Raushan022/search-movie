import React from "react";
import { useGlobalContext } from "../context";
import { NavLink } from "react-router-dom";

const Movies = () => {
  const { movies, isLoading } = useGlobalContext();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <section>
      <div className="container grid grid-4-col">
        {movies.map((movie) => {
          const { Title, imdbID, Poster, Year } = movie;

          return (
            <NavLink to={`movie/${imdbID}`} key={imdbID}>
              <div className="card">
                <div>
                  <h2>
                    {Title.length >= 15
                      ? `${Title.substring(0, 15)}...`
                      : Title}
                  </h2>
                  <img src={Poster} alt={`${Title}_poster`} />
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </section>
  );
};

export default Movies;
