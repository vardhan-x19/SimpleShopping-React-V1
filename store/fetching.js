import { configureStore, createSlice } from "@reduxjs/toolkit";

const fetchingSlice=createSlice({
    name:"fetchDone",
    initialState:{
        fetchdone:false,
        curFetch:false,
    },
    reducers:{
        fecthingdone:(state)=>{
            state.fetchdone= !state.fetchdone;
        },
        curFecthing:(state)=>{
            state.curFetch= !state.curFetch;
        },
        curFecthingFinish:(state)=>{
            state.curFetch= !state.curFetch;
        }
    }
})

export default fetchingSlice;
export const fetchActions=fetchingSlice.actions;