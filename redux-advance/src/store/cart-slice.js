import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
    changed: false
};


const cartSlice = createSlice({
    name: 'cart', 
    initialState: initialState,
    reducers: {
        add(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id );
            state.changed = true;
            if(!existingItem) {
                state.items.push(
                    {
                        id: newItem.id, 
                        price: newItem.price, 
                        name: newItem.title, 
                        quantity: 1,
                        totalPrice: newItem.price
                    }
                );
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price
            }
            state.totalPrice = state.totalPrice + newItem.price;
            state.totalQuantity++;
        },
        remove(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            state.changed = true;

            if(existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
    
            } else  {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }

            state.totalPrice = state.totalPrice - existingItem.price;
            state.totalQuantity--;
        },
        replace(state, action) {
            state.items = action.payload.items;
            state.totalQuantity = action.payload.totalQuantity;
            state.totalPrice = action.payload.totalPrice;
        }
    }
});




export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
