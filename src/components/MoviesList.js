import React from "react";
import { Link } from "react-router-dom";
import { useMovies } from "../movies/useMovies";

export const MoviesList = () => {
  const movies = useMovies();
  
  return (
    <>
    <ul>
      {movies.data.results.map(movie => (
        <li><Link to={`movies/${movie.id}`} params={{id: movie.id}}>{movie.title}</Link></li>
      ))}
     </ul> 
    </>
  );
};
