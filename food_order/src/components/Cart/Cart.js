//React imports
import { useContext, useState } from 'react';

//Component imports
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import Checkout from './Checkout';

//CSS imports
import styles from './Cart.module.css';

//Main component 
const Cart = (props) => {
    const [isCheckout, setIsCheckout] = useState(false);

    const context = useContext(CartContext);

    const removeHandler = (id) => {
        context.removeItem(id)
    };

    const addHandler = (item) => {
        context.addItem({...item, amount: 1});
    };


    const orderHandler = () => {
        setIsCheckout(true);
    };

    const submitOrderHandler = async(userInfo) => {
        await fetch('https://tasks-52028-default-rtdb.europe-west1.firebasedatabase.app/orders.json', 
        {
            method: 'POST',
            body: JSON.stringify({
                user: userInfo,
                orders: context.items
            })
        });
        props.onCancel();
    };

    const cartItems = <ul className={styles[`cart-items`]}>{
        context.items.map((item) => (
            <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onAdd={addHandler.bind(null, item)} onRemove={removeHandler.bind(null, item.id)} />))
        }</ul>;

        const totalAmount = `$${context.totalAmount.toFixed(2)}`;
    return(
        <Modal>
            {cartItems}
            <div className={styles.total}>
                <span>Total amount</span>
                <span>{totalAmount}</span>
            </div>
            {isCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={props.onCancel} />}
            {!isCheckout && 
            <div className={styles.actions}>
                <button className={styles[`button--alt`]} onClick={props.onCancel}>Cancel</button>
                <button className={styles[`button`]} onClick={orderHandler} >Order</button>
            </div>
            }
            
        </Modal>
    );
};

//Exports
export default Cart;