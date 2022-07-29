//React imports
import { Fragment } from "react";

//Component imports
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

//CSS imports

//Image imports

//Main component
const Meals = () => {
    return(
        <Fragment>
            <MealsSummary/>
            <AvailableMeals/>
        </Fragment>
    );
}

//Exports
export default Meals;

