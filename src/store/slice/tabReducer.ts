import { createSlice } from "@reduxjs/toolkit";

const tabSlice = createSlice({
    name: "tabs",
    initialState: {
        value: 0
    },
    reducers: {
        setActiveTab: (state, action) => {
            state.value = action.payload.tabIndex;
        }
    }
});

export const { setActiveTab } = tabSlice.actions;
export default tabSlice.reducer;