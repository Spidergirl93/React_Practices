import { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { uiActions } from './store/ui-slice';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';


let firstTime = true;

function App() {


  const showCart = useSelector(state => state.ui.isVisible);

  const cart = useSelector(state => state.cart);

  const notification = useSelector(state => state.ui.notification);

  const dispatch = useDispatch();

  useEffect(() => {

    if(firstTime === true) {
      firstTime = false;
      return;
    }

    const sendCartData = async() => {
      const response = await fetch('https://tasks-52028-default-rtdb.europe-west1.firebasedatabase.app/cart.json',
      {
        method: 'PUT',
        body: JSON.stringify(cart)
      });

      dispatch(uiActions.setNotification(
        {
          status: 'Pending',
          title: 'Sending data...',
          message: 'We are sending your data to the DB'
        }
      ))

      if(!response.ok) {
        throw new Error('Something went wrong!');
      }

      dispatch(uiActions.setNotification(
        {
          status: 'success',
          title: 'Success',
          message: 'Your shopping has been saved.'
        }
      ));
    };

    sendCartData().catch((error) => {
      dispatch(uiActions.setNotification(
        {
          status: 'error',
          title: 'Failed request',
          message: 'Failed to send data...'
        }
      ))
    });

    
    
  }, [cart, dispatch])
  return (
    <Fragment>
      {notification && 
      <Notification status={notification.status} title={notification.title} message={notification.message} />}
      <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
    </Fragment>
    
  );
}

export default App;
