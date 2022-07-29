//React imports
import { Fragment } from "react";

//Component imports
import HeaderButton from './HeaderButton';

//CSS imports
import styles from './Header.module.css';

//Image imports
import mealImg from '../../assets/meals.jpg';



//Main component
const Header = (props) => {

    return (
        <Fragment>
            <header className={styles.header}>
                <h1>YumYum</h1>
                <HeaderButton onClick={props.onClick}>My Order</HeaderButton>
            </header>
            <div className={styles[`main-image`]}>
                <img src={mealImg} alt='loading' />
            </div>
        </Fragment>
    );
};

//Exports
export default Header;