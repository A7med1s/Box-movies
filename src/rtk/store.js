import {configureStore} from "@reduxjs/toolkit"
import moviesSlice from "./slices/movies-slice"
import currentMovieSlice from "./slices/current-movie-slice"
import allMoviesSlice from "./slices/all-movies-slice"
export const store = configureStore({
    reducer :{
        allMovies:allMoviesSlice,
        movies:moviesSlice,
        currntMovie :currentMovieSlice
    }
})
