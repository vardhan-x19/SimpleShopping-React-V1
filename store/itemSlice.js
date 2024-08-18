import {  createSlice } from '@reduxjs/toolkit';
import { initialItems } from '../data/items';

const itemSlice=createSlice({
    name:"defItems",
    initialState:[],
    reducers :{
        fetchingItems:(state,action)=>{
           return state=action.payload;
        }
    }
})
export const ItemActions=itemSlice.actions;
export default itemSlice;