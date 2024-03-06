import { ChevronLeft, ChevronRight } from '@mui/icons-material'
import {
  addDays,
  addMonths,
  endOfMonth,
  endOfWeek,
  format,
  isBefore,
  isSameMonth,
  isToday,
  startOfDay,
  startOfMonth,
  startOfWeek,
  subMonths
} from 'date-fns'
import { useEffect, useState } from 'react'
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
} from './BikeDatePicker.styles'

interface CallendarDaysProps {
  formattedDate: string
  isDisabled: boolean
  today: boolean
  isSelected?: boolean
  sameMonth: boolean
}

const BikeDatePicker = () => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [startDate, setStartDate] = useState<Date | null>(null)
  const [endDate, setEndDate] = useState<Date | null>(null)
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [callendarDays, setCallendarDays] = useState<CallendarDaysProps[]>([])

  const handlePrevMonth = () => {
    setCurrentDate((prevDate) => subMonths(prevDate, 1))
  }

  const handleNextMonth = () => {
    setCurrentDate((prevDate) => addMonths(prevDate, 1))
  }

  const handleDateClick = (date: Date) => {
    setSelectedDate(date)
  }

  const renderDays = () => {
    const monthStart = startOfMonth(currentDate)
    const monthEnd = endOfMonth(monthStart)
    const startDate = startOfWeek(monthStart)
    const endDate = endOfWeek(monthEnd)

    const daysArray = []
    let day = startDate
    let formattedDate = ''

    while (day <= endDate) {
      formattedDate = format(day, 'd')
      formattedDate = formattedDate.padStart(2, '0')
      const isDisabled = isBefore(day, startOfDay(new Date()))
      const today = isToday(day)
      const sameMonth = !isSameMonth(day, monthStart)

      daysArray.push({
        formattedDate,
        isDisabled,
        today,
        sameMonth,
      })

      day = addDays(day, 1)
    }

    setCallendarDays(daysArray)
  }

  useEffect(() => {
    renderDays()
  }, [currentDate])

  return (
    <Container>
      <Header>
        <MonthYear>
          <Month>{format(currentDate, 'MMMM')}</Month>
          <Year>{format(currentDate, 'yyyy')}</Year>
        </MonthYear>
        <IconsContainer>
          <LeftIcon onClick={handlePrevMonth}>
            <ChevronLeft />
          </LeftIcon>
          <RightIcon onClick={handleNextMonth}>
            <ChevronRight />
          </RightIcon>
        </IconsContainer>
      </Header>
      <WeekDays>
        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
          <WeekDay key={day}>{day}</WeekDay>
        ))}
      </WeekDays>
      <CalendarDays>
        {callendarDays?.map(
          ({ formattedDate, isDisabled, today, isSelected, sameMonth }, index) => (
            <Day
              key={index}
              isDisabled={isDisabled}
              isSelected={isSelected}
              onClick={() => handleDateClick(new Date(currentDate))}
              today={today}
              sameMonth={sameMonth}
            >
              {formattedDate}
            </Day>
          ),
        )}
      </CalendarDays>
    </Container>
  )
}

export default BikeDatePicker
