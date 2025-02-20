
import styled from "styled-components";

export const CalendarLayout = styled.div`
 width: 350px;
  height: 240px;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CalendarHeader = styled.div`
  width: 350px;
  height: 44px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
`;

export const MonthSelect = styled.button`
    width: 44px;
    height: 44px;
    background-color: #FFFFFF;
    border: none;
    cursor: pointer;
    &:hover {
    background-color: #e6e6e6;
    }
`;

export const DayButton = styled.button<{
    isToday?: boolean;
    isActive?: boolean;
    isInRange?: boolean;
    isNonCurrentMonth?: boolean;
}>`
  width: 50px;
  height: 36px;
  border: none;
  cursor: ${({ isNonCurrentMonth }) => (isNonCurrentMonth ? "not-allowed" : "pointer")};
  color: ${({ isNonCurrentMonth }) => (isNonCurrentMonth ? "#757575" : "black")};
  background-color: ${({ isToday, isActive, isInRange }) =>
        isActive ? "#006edc" :
            isInRange ? "#80bfff" :
                isToday ? "#ffff76" :
                    "white"};

  &:hover {
    background-color: ${({ isNonCurrentMonth }) => (isNonCurrentMonth ? "#757575" : "#e6e6e6")};
  }
`;

export const DaysGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 50px);
    gap: 4px;
    justify-content: center;
`;

