//React imports
import React from 'react';

//CSS imports
import styles from './Input.module.css';

//Main component
const Input = React.forwardRef((props, ref) => {

    return(
        <div className={styles.input}>
            <label>{props.label}</label>
            <input ref={ref} {...props.input} />
        </div>
    );
});

//Exports
export default Input;