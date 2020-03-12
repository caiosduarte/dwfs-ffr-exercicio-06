import { useState, useEffect } from 'react';
import { MoviesService } from '../services/MoviesService';

export const useMovies = () => {
    const [movies, setMovies] = useState({data: {results: [] }});

    // resolve o problema das promises do javascript
    const requestMovies = async () => {
      const moviesResults = await MoviesService.getPopularMovies();
      setMovies(moviesResults);  
    };
    
    useEffect(() => {
      requestMovies();
    }, []);

    return movies;
}

