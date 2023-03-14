import axios from "axios";

//para poder consumir la API de Pelis con una base de URL
const movieDB= axios.create({
    baseURL:'https://api.themoviedb.org/3/movie',
    params:{
        api_key:'b73afdb14d81ff27f916523d57fa5992',
        language:'es-ES'
    }
})

export default movieDB;