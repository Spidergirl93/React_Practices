//CSS imports
import styles from './Card.module.css';

//Main component
const Card = (props) => {

    return(
        <div className={styles.card}>
            {props.children}
        </div>
    );

}

//Exports
export default Card;