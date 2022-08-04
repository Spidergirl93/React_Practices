import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

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
              body: JSON.stringify(
                { 
                    items: cart.items,
                    totalQuantity: cart.totalQuantity,
                    totalPrice: cart.totalPrice
                }
            )
            });
      
            //Check for errors
            if(!response.ok) {
              throw new Error('Something went wrong!');
            }
      
        };

        try{
            await sendData();
             //If all is alright
            dispatch(uiActions.setNotification(
            {
                status: 'success',
                title: 'Success',
                message: 'Your shopping has been saved.'
            }
      ));

        } catch (error){
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


export const fetchCardData = () => {
    return async(dispatch) => {

        const getData = async() => {
            const response = await fetch('https://tasks-52028-default-rtdb.europe-west1.firebasedatabase.app/cart.json');
            if(!response.ok) {
                throw new Error('Something went wrong!');
            }

            const data = await response.json();
            return data;
        };

        try {
            const cartData = await getData();
            dispatch(cartActions.replace({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity,
                totalPrice: cartData.totalPrice
            }));
        } catch(error) {
            dispatch(uiActions.setNotification(
                {
                  status: 'error',
                  title: 'Failed request',
                  message: 'Could not fetch data from the DB'
                }
            ))
        }
    }
}