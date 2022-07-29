//React imports
import React, { useReducer } from 'react'

//Component imports
import CartContext from './cart-context';

//Other Methods and components
const latestCart = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    if(action.type === 'ADD') {
        
        const updatedTotalAmount = state.totalAmount + action.value.price * action.value.amount;

        //check if the item already exists in the cart
        const existingItemIndex = state.items.findIndex( (item) => item.id === action.value.id);
        const existingItem = state.items[existingItemIndex];
        let updatedItems; 

        if (existingItem) {
            const updatedItem = { ...existingItem, amount: existingItem.amount + action.value.amount};
            updatedItems = [...state.items];
            updatedItems[existingItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.value);
        }
        return {
        items: updatedItems,
        totalAmount: updatedTotalAmount
        };        
    } else if(action.type === 'REMOVE') {
        const existingIndex = state.items.findIndex(
            (item) => item.id === action.value
        );
        const existingItem = state.items[existingIndex];
        const updatedTotalPrice = state.totalAmount - existingItem.price;
        let updatedItems

        //Check if the entire item card sould be removed
        if(existingItem.amount === 1) {
            updatedItems = state.items.filter ((item) => item.id !== existingItem.id);
        } else {
            const updatedItem = {...existingItem, amount: (existingItem.amount - 1)};
            updatedItems = [...state.items];
            updatedItems[existingIndex] = updatedItem;
        }

        return ({
            items: updatedItems,
            totalAmount: updatedTotalPrice
        });
    }

    return latestCart;
};

//Main component
const CartProvider = (props) => {

    const [cart, dispatchCart] = useReducer(cartReducer, latestCart);

    const addToCart = (item) => {
        dispatchCart({
            type: 'ADD',
            value: item
        });
    };

    const reduceCart = (id) => {
        dispatchCart({
            type: 'REMOVE',
            value: id
        });
    };

    const cartContext = {
        items: cart.items,
        totalAmount: cart.totalAmount,
        addItem: addToCart,
        removeItem: reduceCart
    };

    


    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}

//Exports
export default CartProvider;