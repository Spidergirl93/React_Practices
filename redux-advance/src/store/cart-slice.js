import { createSlice } from '@reduxjs/toolkit';

import { uiActions } from './ui-slice';

const initialState = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0
};


const cartSlice = createSlice({
    name: 'cart', 
    initialState: initialState,
    reducers: {
        add(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id );
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

            if(existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
    
            } else  {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }

            state.totalPrice = state.totalPrice - existingItem.price;
            state.totalQuantity--;
        }
    }
});


export const sendCartData = (cart) => {
    return async(dispatch) => {

        dispatch(uiActions.setNotification(
            {
              status: 'Pending',
              title: 'Sending data...',
              message: 'We are sending your data to the DB'
            }
        ));

        const sendData = async() => {
            const response = await fetch('https://tasks-52028-default-rtdb.europe-west1.firebasedatabase.app/cart.json',
            {
              method: 'PUT',
              body: JSON.stringify(cart)
            });
      
            //Check for errors
            if(!response.ok) {
              throw new Error('Something went wrong!');
            }
      
        };

        try{
            sendData();
             //If all is alright
            dispatch(uiActions.setNotification(
            {
                status: 'success',
                title: 'Success',
                message: 'Your shopping has been saved.'
            }
      ));

        } catch{
            dispatch(uiActions.setNotification(
                {
                  status: 'error',
                  title: 'Failed request',
                  message: 'Failed to send data...'
                }
              ))
        }

    };
};

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
