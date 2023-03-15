import { useEffect, useState } from 'react';
import movieDB from "../api/movieDB";
import { Movie, MovieDBMoviesResponse } from "../interfaces/movieInterface";


export const useMovies = () => {

    const [isLoading, setisLoading] = useState(true);

    const [peliculasEnCine, setPeliculasEnCine] = useState<Movie[]>([])
    const [peliculasPopulares, setPeliculasPopulares] = useState<Movie[]>([])

    const getMovies = async () => {

        const respNowPlaying = await movieDB.get<MovieDBMoviesResponse>('/now_playing');
        const respPopular = await movieDB.get<MovieDBMoviesResponse>('/popular');
        // const respPopular = await movieDB.get<MovieDBMoviesResponse>('/top_rated');
        // const respPopular = await movieDB.get<MovieDBMoviesResponse>('/upcoming');
        // const peliculas = resp.data.results
        setPeliculasEnCine(respNowPlaying.data.results)
        setPeliculasPopulares(respPopular.data.results)
            // .then( resp =>{
            //   console.log(resp.data.results[0].title);
            // });
        setisLoading(false);
    }
  
    useEffect(() => {
        //Now_Playing
        getMovies();
        
      }, [])
    return {

        peliculasEnCine,
        peliculasPopulares,
        isLoading
    }
    
}
