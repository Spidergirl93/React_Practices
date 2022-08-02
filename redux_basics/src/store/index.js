import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialCounterState = {
    counter: 0,
    showCounter: false
};

const initAuth = {
    loggedIn: false
};

const counterSlice = createSlice({
    name: 'counter', 
    initialState: initialCounterState,
    reducers: {
        add(state, action) {
            state.counter = state.counter + action.payload;
        },
        show(state) {
            state.showCounter = true;
        },
        hide(state) {
            state.showCounter = false;
        }
    }
});

const authSlice = createSlice({
    name: 'authorization',
    initialState: initAuth,
    reducers: {
        login(state) {
            state.loggedIn = true
        },
        logout(state) {
            state.loggedIn = false
        }
    }
});



/* const counterReducer = (state = initialState, action) => {
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
 */

const store = configureStore(
    {
        reducer: 
        {
            counter: counterSlice.reducer,
            auth: authSlice.reducer
        }

    }
);

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;