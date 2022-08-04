import { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { sendCartData, fetchCardData } from './store/cart-actions';
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
    dispatch(fetchCardData());
  }, [dispatch]);

  useEffect(() => {

    if(firstTime === true) {
      firstTime = false;
      return;
    }
    if(cart.fetching) {
      dispatch(sendCartData(cart));
    }
  
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
