import { configureStore } from '@reduxjs/toolkit';
import itemSlice from './itemSlice';
import fetchingSlice from './fetching';


const myntraStore=configureStore({
 reducer:{
    defItems:itemSlice.reducer,
    fetchDone:fetchingSlice.reducer
 }
})

export default myntraStore;