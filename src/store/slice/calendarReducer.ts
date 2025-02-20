import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CalendarState {
    selectedStartDate: Date | null;
    selectedEndDate: Date | null;
}

const initialState: CalendarState = {
    selectedStartDate: null,
    selectedEndDate: null,
};

const calendarSlice = createSlice({
    name: "calendar",
    initialState,
    reducers: {
        setDateRange(state, action: PayloadAction<{ start: Date | null; end: Date | null }>) {
            state.selectedStartDate = action.payload.start;
            state.selectedEndDate = action.payload.end;
        },
    },
});

export const { setDateRange } = calendarSlice.actions;
export default calendarSlice.reducer;
