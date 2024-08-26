import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    info:null,
}

export const movieSlice = createSlice({
    name:"movie",
    initialState,
    reducers:{
        loadmovie:(state,actions)=>{
            state.info = actions.payload
        },
        removemovie:(state,action)=>{
            state.info = null
        }
    },
})

export const {loadmovie,removemovie} = movieSlice.actions;
export default movieSlice.reducer