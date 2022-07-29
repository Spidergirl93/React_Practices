import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import Button from './Button';
import styles from '../Styles/ErrorModal.module.css';

const Overlay = (props) => {
    return (
        <div className={styles.backdrop}>
        <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>
                    {props.header}
                </h2>
            </header>
            <div className={styles.content}>
                <p>{props.message}</p>
            </div>
            <footer className={styles.actions}>
                <Button onClick={props.onCancel}>{props.button}</Button>
            </footer>
        </Card>
    </div>
    );
    
}


const ErrorModal = (props) => {

    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Overlay header={props.header} message={props.message} button={props.button} onCancel={props.onCancel} />, document.getElementById('overlay'))}
        </React.Fragment>
        
    )
}

export default ErrorModal;