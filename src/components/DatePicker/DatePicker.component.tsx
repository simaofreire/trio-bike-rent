import { ChevronLeft, ChevronRight } from '@mui/icons-material'
import { format } from 'date-fns'
import { CalendarDaysProps } from './DatePicker.container'

import {
  CalendarDays,
  Container,
  Day,
  Header,
  IconsContainer,
  LeftIcon,
  Month,
  MonthYear,
  RightIcon,
  WeekDay,
  WeekDays,
  Year,
} from './DatePicker.styles'

interface DatePickerProps {
  currentDate: Date
  calendarDays: CalendarDaysProps[]
  handlePrevMonth: () => void
  handleNextMonth: () => void
  handleDateClick: (date: Date) => void
}

export const DatePicker = ({
  currentDate,
  calendarDays,
  handlePrevMonth,
  handleNextMonth,
  handleDateClick,
}: DatePickerProps) => {
  return (
    <Container data-testid='bike-date-picker'>
      <Header>
        <MonthYear>
          <Month data-testid='date-picker-month'>{format(currentDate, 'MMMM')}</Month>
          <Year data-testid='date-picker-year'>{format(currentDate, 'yyyy')}</Year>
        </MonthYear>
        <IconsContainer>
          <LeftIcon onClick={handlePrevMonth} data-testid='date-picker-prev-month'>
            <ChevronLeft />
          </LeftIcon>
          <RightIcon onClick={handleNextMonth} data-testid='date-picker-next-month'>
            <ChevronRight />
          </RightIcon>
        </IconsContainer>
      </Header>
      <WeekDays data-testid='date-picker-week-days'>
        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
          <WeekDay key={day}>{day}</WeekDay>
        ))}
      </WeekDays>
      <CalendarDays data-testid='date-picker-calendar-days'>
        {calendarDays?.map(({ formattedDate, types, sameMonth, fullDate }, index) => {
          const isDisabled = ['disabled'].includes(types)
          return (
            <Day
              key={index}
              types={types}
              onClick={() => !isDisabled && handleDateClick(fullDate)}
              sameMonth={sameMonth}
              data-testid='date-picker-day'
            >
              {formattedDate}
            </Day>
          )
        })}
      </CalendarDays>
    </Container>
  )
}
