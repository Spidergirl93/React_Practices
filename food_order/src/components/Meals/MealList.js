//React imports
import { useContext } from 'react';


//Component imports
import MealForm from './MealForm';
import CartContext from '../../store/cart-context';

//CSS imports
import styles from './MealList.module.css';

//Main component
const MealList = (props) => {

    const cart = useContext(CartContext);

    const addHandler = (amount) => {
        cart.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    };


    return(
        <li className={styles.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={styles.description}>{props.description}</div>
                <div className={styles.price}>${props.price}</div>
            </div>
            <div>
                <MealForm id={props.id} onAddToCart={addHandler}/>
            </div>
        </li>
    );
}

//Exports
export default MealList;