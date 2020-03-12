import React from "react";
import {useState, useEffect} from "react";
import { MoviesService } from '../services/MoviesService';

export const MovieDetail = (props) => {
    const [movie, setMovie] = useState({});

    // resolve o problema das promises do javascript
    const requestMovie = async () => {   
      const id = props.match.params.id;
      const movieResult = await MoviesService.getMovieById(id);
      setMovie(movieResult.data);
    };
  

    useEffect(() => {
      requestMovie();
    },[]);

    return (
        <>
            <h2>{movie.title}</h2>   
            <dt>
              <dh></dh><dd></dd>
            </dt>           
        </>        
    );
};
    
