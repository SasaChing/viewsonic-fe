export interface CalendarProps {
    selectedStartDate: Date | null;
    selectedEndDate: Date | null;
    onDateSelect: (date: Date) => void;
}

export interface CalendarState {
    selectedStartDate: Date | null;
    selectedEndDate: Date | null;
}
