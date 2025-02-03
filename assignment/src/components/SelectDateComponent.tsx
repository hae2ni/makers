import { colors } from "@sopt-makers/colors";
import React, { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import { flex } from "../styles/commonStyles";
import { fontsObject } from "@sopt-makers/fonts";

export default function SelectDateComponent() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const CustomButton = forwardRef(({ value, onClick }, ref) => (
    <DateButtonContinaer onClick={onClick}>{value}</DateButtonContinaer>
  ));

  const renderMonthContent = (month, shortMonth, longMonth, day) => {
    const fullYear = new Date(day).getFullYear();
    const tooltipText = `Tooltip for month: ${longMonth} ${fullYear}`;

    return <span title={tooltipText}>{shortMonth}</span>;
  };
  return (
    <DatePicker
      renderCustomHeader={({ selectedDate, increaseMonth }) => (
        <DateHeaderContainer>
          {selectedDate?.getMonth}/{selectedDate?.getYear}
          <button onClick={increaseMonth}>{">"}</button>
        </DateHeaderContainer>
      )}
      shouldCloseOnSelect
      minDate={new Date()}
      renderMonthContent={renderMonthContent}
      customInput={<CustomButton />}
      selected={selectedDate}
      onChange={(date) => setSelectedDate(date)}
    />
  );
}

const DateButtonContinaer = styled.button`
  ${flex}
  ${fontsObject.BODY_4_13_L}
  background-color: ${colors.blue200};

  width: 10rem;
  height: 5rem;
  border-radius: 12px;
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const DateHeaderContainer = styled.div`
  ${flex}
  background-color: ${colors.blue100};
`;
