import { configureStore } from '@reduxjs/toolkit';
import counterSliceReducer from './slices/coounter/index';

export const store = configureStore({
    reducer: {
        counter: counterSliceReducer
    },
})