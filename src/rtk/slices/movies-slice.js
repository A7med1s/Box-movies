import {createSlice}from "@reduxjs/toolkit"
import { data } from "../../data"
export const moviesSlice =createSlice ({
    initialState : data,
    name :"movies-slice",
    reducers:{
        firstMove:(state,action)=>{
            state = data
            let newdata = state.filter((movie)=>{
                return movie.id <= 12
            })
            return newdata
        },
        secMove:(state,action)=>{
            state = data
            let newdata = state.filter((movie)=>{
                return movie.id > 12 && movie.id <= 24
            })
            return newdata
        },
        thirdMove:(state,action)=>{
            state = data
            let newdata = state.filter((movie)=>{
                return movie.id > 24
            })
            return newdata
        }
    }
})

export const {firstMove,secMove,thirdMove}  = moviesSlice.actions
export default moviesSlice.reducer