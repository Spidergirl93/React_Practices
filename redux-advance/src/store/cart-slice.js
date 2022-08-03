import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    
};


const cartSlice = createSlice({
    name: 'cart', 
    initialState: initialState,
    reducers: {
    }
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
