//React imports
import React from 'react';

//Main stuff
const CartContext = React.createContext(
    {
        items: [],
        totalAmount: 0,
        addItem: (item) => {},
        removeItem: (id) => {}
    }
);

//Exports
export default CartContext;