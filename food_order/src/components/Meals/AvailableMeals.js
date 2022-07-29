//React imports
import { useEffect, useState } from 'react';

//Component imports
import Card from '../UI/Card';
import MealList from './MealList';

//CSS imports 
import styles from './AvailableMeals.module.css';

//misc


//Main component
const AvailableMeals = () => {

  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData= async() => {
      const response = await fetch('https://tasks-52028-default-rtdb.europe-west1.firebasedatabase.app/meals.json');
      
      if(!response.ok) {
        throw new Error('Something went wrong');
      }
     
      const data = await response.json();

      const mealDB = [];
      for(const key in data) {
        mealDB.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price
        })
      }
      setMeals(mealDB);
    };

    fetchData().catch((error) => {
      setError(error.message);
    });
    setLoading(false);
  
  }, []);


  if (loading) {
    return(
      <section className={styles.loading}>
        <p>Loading...</p>
      </section>
    );
  }  
  
  if(error) {
    return(
      <section className={styles.error}>
        <p>{error}</p>
      </section>
    )
  }


  const mealList = meals.map(meal => 
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
                    {mealList}
                </ul>
            </Card> 
        </section>
      );
};

//Exports
export default AvailableMeals;

