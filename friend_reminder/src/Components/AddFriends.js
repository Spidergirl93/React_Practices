import React, {useRef, useState} from 'react';

import Card from './Card';
import Button from './Button';
import ErrorModal from './ErrorModal';


import styles from '../Styles/AddFriends.module.css';

const AddFriends = props => {

    
    const [error, setError] = useState();
    const name = useRef();
    const age = useRef();


    

    const formHandler = event => {
        event.preventDefault();
        const finalName = name.current.value;
        const finalAge = age.current.value;
        if (checkFields(finalName) === 0 || checkValidity(finalAge) === 0)
        {
            return;
        }
        props.onAddFriend(finalName, finalAge);
        name.current.value = '';
        age.current.value = '';
    };

    const checkFields = (finalName) => {
        if (finalName.trim().length === 0)
        {
            setError({
                message: "The name input is invalid."
            });
            return 0;
        }
        return 1;
    }

    const checkValidity = (finalAge) => {
        if (+finalAge < 1) 
        {
            setError({
                message: "The age must be a positive number."
            });
            return 0;
        }
        return 1;
    }

    const errorHandler = () => {
        setError(null);
    }



    return (
        <React.Fragment>
            {error && <ErrorModal header="Fatal Error" message={error.message} button="Fine!" onCancel={errorHandler} />}
            <Card className={styles.input}>
                <form onSubmit={formHandler}>
                    <label >Friend's name</label>
                    <input type='text' ref={name}/>
                    <label>Age</label>
                    <input type='number' ref={age}/>
                    <Button type='submit'>Add Friend</Button>
                </form>
            </Card>
        </React.Fragment>
        
    );
}

export default AddFriends;