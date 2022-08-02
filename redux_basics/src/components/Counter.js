import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import classes from './Counter.module.css';




const Counter = () => {

  const counter = useSelector(state => state.counter);
  const displayStatus = useSelector(state => state.showCounter);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch({
        type: 'HIDE'
      });
    }, 3000);
    return () => clearTimeout(timer);
  }, [displayStatus]);

  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: 'ADD', value: 1});
  };

  const decrementHandler = () => {
    dispatch({ type: 'ADD', value: -1});
  };

  const increaseHandler = () => {
    dispatch(
      {
        type: 'ADD',
        value: 5
      }
    );
  };

  const toggleCounterHandler = () => {
    dispatch({type: 'SHOW'});
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {displayStatus && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseHandler}>Increrase by 5...?</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
