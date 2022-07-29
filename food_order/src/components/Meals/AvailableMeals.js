//Component imports
import Card from '../UI/Card';
import MealList from './MealList';

//CSS imports 
import styles from './AvailableMeals.module.css';

//Dummy DB
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

//Main component
const AvailableMeals = () => {

    const dummyMeals = DUMMY_MEALS.map(meal => 
    <MealList 
    id={meal.id}
    key={meal.id} 
    name={meal.name} 
    description={meal.description}
    price={meal.price} />)

      return(
        <section className={styles.meals}>
            <Card>
                <ul>
                    {dummyMeals}
                </ul>
            </Card>  
        </section>
      );
};

//Exports
export default AvailableMeals;

