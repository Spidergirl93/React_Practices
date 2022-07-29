//React imports
import { useContext } from 'react';

//Component imports
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

//CSS imports
import styles from './Cart.module.css';

//Main component 
const Cart = (props) => {

    const context = useContext(CartContext);

    const removeHandler = (id) => {
        context.removeItem(id)
    };

    const addHandler = (item) => {
        context.addItem({...item, amount: 1});
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
            <div className={styles.actions}>
                <button className={styles[`button--alt`]} onClick={props.onCancel}>Cancel</button>
                <button className={styles[`button`]} >Order</button>
            </div>
        </Modal>
    );
};

//Exports
export default Cart;