import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    // initialState is the thing that it reads from useSelector
    // const someVariable = useSelector(state => state.counter); ------>>> thins someVariable is nothing but initialState
    initialState: 0,
    name: "counter",
    // inside reducers everything comes under actions
    reducers: {
        increment: (state) => state + 1,
        decrement: (state) => state - 1,
        // data comes inside it as params is action
        incrementByNumber: (state, action) => state + action.payload
    }
});

export const { increment, decrement, incrementByNumber } = counterSlice.actions;
export default counterSlice.reducer;

// the object inside counterSlice is reducers and the thing we exported at last line is reducer 
