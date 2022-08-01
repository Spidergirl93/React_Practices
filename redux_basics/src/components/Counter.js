import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {

  const counter = useSelector(state => state.counter);

  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: 'INCREMENT'});
  };

  const decrementHandler = () => {
    dispatch({ type: 'DECREMENT'});
  };

  const increaseHandler = () => {
    dispatch(
      {
        type: 'INCREASE',
        value: 5
      }
    );
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
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
