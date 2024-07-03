import {createSlice} from "@reduxjs/toolkit"

export const currentMovieSlice= createSlice({
    initialState :{},
    name :"current-movie-slice",
    reducers:{
        getData :(state,action)=> {
            return state = action.payload;
        } 
    }
})


export const {getData} = currentMovieSlice.actions
export default currentMovieSlice.reducer