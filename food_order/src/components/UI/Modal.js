//React imports
import React from 'react';
import ReactDOM from 'react-dom';

//CSS imports
import styles from './Modal.module.css';

//Auxiliary component
const Overlay = (props) => {
    return(
        <div className={styles.backdrop}>
            <div className={styles.modal}>
                {props.children}
            </div>
        </div>
    );
};


//Main component
const Modal = (props) => {

    return(
        <React.Fragment>
            {ReactDOM.createPortal(
            <Overlay props={props}>{props.children}</Overlay>,
            document.getElementById('overlay'))}
        </React.Fragment>
    );
};

//Exports
export default Modal;