import { createSlice } from "@reduxjs/toolkit";

const counterReducer = createSlice({
    name: "counter",
    initialState: {
    value: 0
    },
    reducers: {
        addCount: (state) => {
            state.value += 1;
        },
        minusCount: (state) => {
            state.value -= 1;
        },
        reset: (state) => {
            state.value = 0;
        },
    },
});

export const { addCount, minusCount, reset } = counterReducer.actions;
export default counterReducer.reducer;
