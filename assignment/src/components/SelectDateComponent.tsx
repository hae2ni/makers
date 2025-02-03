import { colors } from "@sopt-makers/colors";
import { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import { flex } from "../styles/commonStyles";
import { fontsObject } from "@sopt-makers/fonts";
import styles from "../styles/calendar.module.css";
import { FaArrowCircleRight } from "react-icons/fa";
<FaArrowCircleRight />;
const newDate = new Date();
const YEARS = Array.from({ length: newDate.getFullYear() + 1 - 2000 }, (_, i) => newDate.getFullYear() + i);
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function SelectDateComponent() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const CustomButton = forwardRef<HTMLButtonElement, { value?: string; onClick?: () => void }>(
    ({ value, onClick }, ref) => (
      <DateButtonContinaer ref={ref} onClick={onClick}>
        {value}
      </DateButtonContinaer>
    ),
  );

  const renderMonthContent = (_m: number, shortMonthText: string, fullMonthText: string, day: Date) => {
    const fullYear = new Date(day).getFullYear();
    const titleText = `selected month: ${fullMonthText} ${fullYear}`;

    return <span title={titleText}>{shortMonthText}</span>;
  };

  return (
    <DatePicker
      renderCustomHeader={({ date, increaseMonth, changeYear }) => (
        <DateHeaderContainer>
          <MonthYearText>{MONTHS[date.getMonth()]}</MonthYearText>

          <FaArrowCircleRightStyle onClick={increaseMonth} />

          <YearSelect onChange={(e) => changeYear(+e.target.value)} value={date.getFullYear()}>
            {YEARS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </YearSelect>
        </DateHeaderContainer>
      )}
      shouldCloseOnSelect
      minDate={new Date()}
      renderMonthContent={renderMonthContent}
      customInput={<CustomButton />}
      selected={selectedDate}
      onChange={(date) => setSelectedDate(date)}
      dayClassName={(d) => (d.getDate() === selectedDate!.getDate() ? styles.selectedDay : styles.unselectedDay)}
      excludeDates={[new Date()]}
      formatWeekDay={(day) => day.slice(0, 1)}
      calendarClassName={styles.customCalendar}
    />
  );
}

const DateButtonContinaer = styled.button`
  ${flex}
  ${fontsObject.BODY_4_13_L}
  background-color: ${colors.blue200};

  width: 14rem;
  height: 5rem;
  border-radius: 12px;
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${colors.blue400};
    transform: scale(1.05);
  }
`;

const DateHeaderContainer = styled.div`
  ${flex}
  background-color: ${colors.blue100};
  padding: 1.2rem;
  border-radius: 10px;
  gap: 0.5rem;
`;

const MonthYearText = styled.p`
  ${fontsObject.LABEL_1_18_SB}
`;

const FaArrowCircleRightStyle = styled(FaArrowCircleRight)`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;

const YearSelect = styled.select`
  ${fontsObject.LABEL_3_14_SB}
  margin-left: 8px;
  cursor: pointer;
  border: 1px solid ${colors.gray300};
  &:hover {
    border-color: ${colors.blue300};
  }
`;
