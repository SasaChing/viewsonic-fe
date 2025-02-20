import React, { useState } from "react";
import { CalendarLayout, CalendarHeader, MonthSelect, DayButton, DaysGrid } from "./Calendar.style";
import { CalendarProps } from "./Calendar.type";

export const Calendar: React.FC<CalendarProps> = () => {
    const today = new Date();
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [currentYear, setCurrentYear] = useState(today.getFullYear());
    const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
    const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);

    const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();

    const handleDateClick = (day: number) => {
        const selectedDate = new Date(currentYear, currentMonth, day);

        if (!selectedStartDate || (selectedStartDate && selectedDate < selectedStartDate)) {
            setSelectedStartDate(selectedDate);
            setSelectedEndDate(null);
        } else if (selectedStartDate && selectedDate >= selectedStartDate) {
            setSelectedEndDate(selectedDate);
        }
    };

    const handlePrevMonth = () => {
        setCurrentMonth((prevMonth) => {
            let newMonth = prevMonth - 1;
            let newYear = currentYear;

            if (newMonth < 0) {  // 如果月份變成 -1，則切換到前一年
                newMonth = 11;    // 設定為 12 月
                newYear -= 1;     // 年份減 1
            }

            setCurrentYear(newYear);
            return newMonth;
        });
    };

    const handleNextMonth = () => {
        setCurrentMonth((prevMonth) => {
            let newMonth = prevMonth + 1;
            let newYear = currentYear;

            if (newMonth > 11) {  // 如果月份變成 12，則切換到下一年
                newMonth = 0;      // 設定為 1 月
                newYear += 1;      // 年份加 1
            }

            setCurrentYear(newYear);
            return newMonth;
        });
    };

    const isDateInRange = (date: Date) => {
        return (
            selectedStartDate &&
            selectedEndDate &&
            date > selectedStartDate &&
            date < selectedEndDate
        );
    };

    return (
        <CalendarLayout>
            <CalendarHeader>
                <MonthSelect onClick={handlePrevMonth}>◀</MonthSelect>
                {`${currentYear}年 ${currentMonth + 1}月`}
                <MonthSelect onClick={handleNextMonth}>▶</MonthSelect>
            </CalendarHeader>
            <DaysGrid>
                {Array.from({ length: firstDayIndex }).map((_, index) => (
                    <DayButton key={`empty-${index}`} isNonCurrentMonth>
                        &nbsp;
                    </DayButton>
                ))}
                {Array.from({ length: daysInMonth }).map((_, day) => {
                    const date = new Date(currentYear, currentMonth, day + 1);
                    return (
                        <DayButton
                            key={day}
                            isToday={date.toDateString() === today.toDateString()}
                            isActive={!!selectedStartDate && date.toDateString() === selectedStartDate.toDateString()}
                            isInRange={!!selectedStartDate && !!selectedEndDate && isDateInRange(date) || false}
                            onClick={() => handleDateClick(day + 1)}>
                            {day + 1}日
                        </DayButton>
                    );
                })}
            </DaysGrid>
        </CalendarLayout>
    );
};