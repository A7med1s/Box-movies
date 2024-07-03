import {createSlice}from "@reduxjs/toolkit"
import { data } from "../../data"
export const allMoviesSlice =createSlice ({
    initialState : data,
    name :"movies-slice",
    reducers:{
        getAll:(state,action)=>{
        state = data
        return state
        },
        getAction :(state,action)=>{
            state = data
            let newdata = state.filter((movie)=>{
                return movie.gener === 'Action'
            })
            return newdata
        },
        getDrama :(state,action)=>{
            state = data
            let newdata = state.filter((movie)=>{
                return movie.gener === 'Drama'
            })
            return newdata
        },
        getRomantic :(state,action)=>{
            state = data
            let newdata = state.filter((movie)=>{
                return movie.gener === 'Romantic'
            })
            return newdata
        },
        getSciFi :(state,action)=>{
            state = data
            let newdata = state.filter((movie)=>{
                return movie.gener === 'Sci-Fi'
            })
            return newdata
        },
        getAnimation :(state,action)=>{
            state = data
            let newdata = state.filter((movie)=>{
                return movie.gener === 'Animation'
            })
            return newdata
        },
        getComedy :(state,action)=>{
            state = data
            let newdata = state.filter((movie)=>{
                return movie.gener === 'Comedy'
            })
            return newdata
        },
        getSearch :(state,action)=>{
            state = data
            let newdata = state.filter((movie)=>{
                return movie.name.toLowerCase().includes(action.payload)
            })
            return newdata
        },
        getempty :(state,action)=>{
            state = []
            return state
        }
    }
})

export const {getSearch,getAction,getDrama,getRomantic,getSciFi,getAnimation,getComedy ,getAll,getempty} = allMoviesSlice.actions
export default allMoviesSlice.reducer