import { configureStore } from '@reduxjs/toolkit';

const initialState = {
    counter: 0,
    showCounter: false
  };

const counterReducer = (state = initialState, action) => {
    if(action.type === 'ADD') {
        return(
            {
                counter: state.counter + action.value,
                showCounter: state.showCounter
            }
        );
    } else if(action.type === 'SHOW') {
        return(
            {
                counter: state.counter,
                showCounter: true
            }
        );
    } else if(action.type === 'HIDE') {
        return(
            {
                counter: state.counter,
                showCounter: false
            }
        );
    }
    return(state);
};

const store = configureStore({reducer: counterReducer});

export default store;