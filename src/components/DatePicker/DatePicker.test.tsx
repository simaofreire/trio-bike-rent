import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { mockedDatePicker } from 'mocks/Bike'
import { DatePicker } from './DatePicker.component'

describe('DatePicker', () => {
  beforeEach(() => {
    render(
      <DatePicker
        currentDate={mockedDatePicker.currentDate}
        calendarDays={mockedDatePicker.calendarDays}
        handlePrevMonth={mockedDatePicker.handlePrevMonth}
        handleNextMonth={mockedDatePicker.handleNextMonth}
        handleDateClick={mockedDatePicker.handleDateClick}
      />,
    )
  })

  const user = userEvent

  it('should render the DatePicker component', () => {
    const bikeDatePicker = screen.getByTestId('bike-date-picker')
    expect(bikeDatePicker).toBeInTheDocument()
  })

  it('should render the month', () => {
    const month = screen.getByTestId('date-picker-month')
    expect(month).toBeInTheDocument()
  })

  it('should render the year', () => {
    const year = screen.getByTestId('date-picker-year')
    expect(year).toBeInTheDocument()
  })

  it('should render the previous month button', () => {
    const prevMonth = screen.getByTestId('date-picker-prev-month')

    expect(prevMonth).toBeInTheDocument()
  })

  it('should render the next month button', () => {
    const nextMonth = screen.getByTestId('date-picker-next-month')

    expect(nextMonth).toBeInTheDocument()
  })

  it('should render the week days', () => {
    const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

    days.forEach((day) => {
      const weekDay = screen.getByText(day)
      expect(weekDay).toBeInTheDocument()
    })
  })

  it('should render the calendar days', () => {
    const calendarDays = screen.getByTestId('date-picker-calendar-days')

    expect(calendarDays).toBeInTheDocument()
  })

  it('should click on the previous month button', () => {
    const prevMonth = screen.getByTestId('date-picker-prev-month')
    user.click(prevMonth)

    expect(mockedDatePicker.handlePrevMonth).toHaveBeenCalled()
  })

  it('should click on the previous month button', () => {
    const nextMonth = screen.getByTestId('date-picker-next-month')
    user.click(nextMonth)

    expect(mockedDatePicker.handleNextMonth).toHaveBeenCalled()
  })
})
