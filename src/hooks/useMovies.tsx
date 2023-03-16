import { useEffect, useState } from 'react';
import movieDB from "../api/movieDB";
import { Movie, MovieDBMoviesResponse } from "../interfaces/movieInterface";

interface MoviesState {
    nowPlaying: Movie[];
    popular: Movie[];
    topRated: Movie[];
    upcoming: Movie[];

}
export const useMovies = () => {

    const [isLoading, setisLoading] = useState(true);

    const [moviesState, setMoviesState ] = useState<MoviesState>({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upcoming: [],
    })
    // const [peliculasEnCine, setPeliculasEnCine] = useState<Movie[]>([])
    // const [peliculasPopulares, setPeliculasPopulares] = useState<Movie[]>([])

    const getMovies = async () => {

        // const respNowPlaying = await movieDB.get<MovieDBMoviesResponse>('/now_playing');
        // const respPopular = await movieDB.get<MovieDBMoviesResponse>('/popular');
        const nowPlayingPromise  =  movieDB.get<MovieDBMoviesResponse>('/now_playing');
        const popularPromise     =  movieDB.get<MovieDBMoviesResponse>('/popular');
        const topRatedPromise    =  movieDB.get<MovieDBMoviesResponse>('/top_rated');
        const upcomingPromise    =  movieDB.get<MovieDBMoviesResponse>('/upcoming');

        const resp = await Promise.all([
            nowPlayingPromise, 
            popularPromise, 
            topRatedPromise, 
            upcomingPromise
        ]);

        setMoviesState({
            nowPlaying: resp[0].data.results,
            popular: resp[1].data.results,
            topRated: resp[2].data.results,
            upcoming: resp[3].data.results,
        })


        // // const peliculas = resp.data.results
        // setPeliculasEnCine(respNowPlaying.data.results)
        // setPeliculasPopulares(respPopular.data.results)
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
        ...moviesState,
        isLoading
    }
    
}
