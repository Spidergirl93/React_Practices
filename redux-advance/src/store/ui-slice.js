import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isVisible: false,
    notification: null

};


const uiSlice = createSlice({
    name: 'UI', 
    initialState,
    reducers: {
        toggle(state) {
            state.isVisible = !state.isVisible;
        },
        setNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            }
        }
    }
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;

