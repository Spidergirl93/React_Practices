import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import {counterActions} from '../store/index';
import classes from './Counter.module.css';




const Counter = () => {

  const counter = useSelector(state => state.counter);
  const displayStatus = useSelector(state => state.showCounter);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(counterActions.hide());
    }, 3000);
    return () => clearTimeout(timer);
  }, [displayStatus]);

  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.add(1));
  };

  const decrementHandler = () => {
    dispatch(counterActions.add(-1));
  };

  const increaseHandler = () => {
    dispatch(counterActions.add(5));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.show());
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
