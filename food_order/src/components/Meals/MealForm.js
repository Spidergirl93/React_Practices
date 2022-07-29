//React imports 
import { useRef } from 'react';

//Component imports
import Input from '../UI/Input';

//CSS imports
import styles from './MealForm.module.css';

//Main component
const MealForm = (props) => {

    const addItemRef = useRef();

    const submitHandler = event => {
        event.preventDefault();
        const finalAmount = addItemRef.current.value;
        props.onAddToCart(+finalAmount);
    };


    return(
        <form className={styles.form} onSubmit={submitHandler}>
            <Input 
            ref={addItemRef}
            label="Amount"
            input={{
                id: 'amount_' + PaymentResponse.id,
                type: 'number',
                min: '1',
                step: '1',
                defaultValue: '0'
            }} />
            <button>Add</button>
        </form>
    );
}

//Exports
export default MealForm;