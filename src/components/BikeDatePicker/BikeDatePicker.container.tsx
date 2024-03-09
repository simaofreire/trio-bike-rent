import {
  addDays,
  addMonths,
  differenceInDays,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isBefore,
  isSameDay,
  isSameMonth,
  isToday,
  startOfDay,
  startOfMonth,
  startOfWeek,
  subMonths,
} from 'date-fns'
import { useEffect, useState } from 'react'
import { BikeDatePicker } from './BikeDatePicker.component'

export interface CalendarDaysProps {
  formattedDate: string
  types: string
  sameMonth: boolean
  fullDate: Date
}

const BikeDatePickerContainer = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date())
  const [startDate, setStartDate] = useState<Date | null | string>('')
  const [endDate, setEndDate] = useState<Date | null | string>('')
  const [calendarDays, setCalendarDays] = useState<CalendarDaysProps[]>([])
  const [range, setRange] = useState<Date[] | null>([])

  const handlePrevMonth = () => {
    setCurrentDate((prevDate) => subMonths(prevDate, 1))
  }

  const handleNextMonth = () => {
    setCurrentDate((prevDate) => addMonths(prevDate, 1))
  }

  const handleDateClick = (date: Date) => {
    if (!startDate) {
      setStartDate(date)
    }

    if (startDate && !endDate && !isBefore(date, startOfDay(startDate))) {
      setEndDate(date)

      const daysDifference = differenceInDays(date, startDate)

      if (daysDifference > 1) {
        setRange(eachDayOfInterval({ start: startDate, end: date }))
      }
    }

    if (startDate && endDate) {
      setStartDate(null)
      setEndDate(null)
      setRange(null)
    }
  }

  const renderDays = () => {
    const monthStart = startOfMonth(currentDate)
    const monthEnd = endOfMonth(monthStart)
    const beginDate = startOfWeek(monthStart)
    const finishDate = endOfWeek(monthEnd)
    const daysArray = []
    let day = beginDate
    let formattedDate = ''

    while (day <= finishDate) {
      formattedDate = format(day, 'd')
      formattedDate = formattedDate.padStart(2, '0')
      const sameMonth = isSameMonth(day, monthStart)

      daysArray.push({
        formattedDate,
        sameMonth,
        fullDate: day,
        types: defineDayType(day),
      })

      day = addDays(day, 1)
    }
    setCalendarDays(daysArray)
  }

  const defineDayType = (day: Date) => {
    const isSelected =
      (startDate && isSameDay(startDate, day)) || (endDate && isSameDay(endDate, day))

    let isRange = false
    if (range) {
      const rangeCopy = [...range]
      rangeCopy.shift()
      rangeCopy.pop()
      isRange = rangeCopy.map((date) => date.toISOString()).includes(day.toISOString())
    }

    if (!isSelected && isToday(day)) {
      return 'today'
    } else if (isBefore(day, startOfDay(new Date()))) {
      return 'disabled'
    } else if (isRange) {
      return 'range'
    } else if (isSelected) {
      return 'selected'
    } else {
      return 'normal'
    }
  }

  useEffect(() => {
    renderDays()
  }, [currentDate, startDate, endDate, range])

  return (
    <BikeDatePicker
      currentDate={currentDate}
      calendarDays={calendarDays}
      handlePrevMonth={handlePrevMonth}
      handleNextMonth={handleNextMonth}
      handleDateClick={handleDateClick}
    />
  )
}

export default BikeDatePickerContainer
