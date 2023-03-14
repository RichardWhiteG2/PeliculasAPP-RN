import { useEffect, useState } from 'react';
import movieDB from "../api/movieDB";
import { Movie, MovieDBNowPlaying } from "../interfaces/movieInterface";


export const useMovies = () => {

    const [isLoading, setisLoading] = useState(true);

    const [peliculasEnCine, setPeliculasEnCine] = useState<Movie[]>([])

    const getMovies = async () => {

        const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing');
        // const peliculas = resp.data.results
        setPeliculasEnCine(resp.data.results)
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
        isLoading
    }
    
}
