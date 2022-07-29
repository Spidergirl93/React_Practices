//React imports
import { useContext, useEffect, useState } from 'react';

//Component imports
import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/cart-context';

//CSS imports
import styles from './HeaderButton.module.css';

//Main component
const HeaderButton = props => {

    const [bumpButton, setBumpButton] = useState(false);

    const context = useContext(CartContext);
    const {items} = context;

    const itemAmount = items.reduce((initialAmount, item) => {
        return initialAmount + item.amount;
    }, 0);

    const buttonStyle = `${styles.button} ${bumpButton ? styles.bump : ''}`;
    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBumpButton(true);
        const timer = setTimeout(() => {
            setBumpButton(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    return(
        <button className={buttonStyle} onClick={props.onClick}>
            <span className={styles.icon}>
                <CartIcon/>
            </span>
            <span>{props.children}</span>
            <span className={styles.badge}>{itemAmount}</span> 
        </button>
    );
}

//Exports
export default HeaderButton;


