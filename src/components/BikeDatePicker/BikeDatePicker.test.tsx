import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { mockedBikeDatePicker } from 'mocks/Bike'
import { BikeDatePicker } from './BikeDatePicker.component'

describe('BikeDatePicker', () => {
  beforeEach(() => {
    render(
      <BikeDatePicker
        currentDate={mockedBikeDatePicker.currentDate}
        calendarDays={mockedBikeDatePicker.calendarDays}
        handlePrevMonth={mockedBikeDatePicker.handlePrevMonth}
        handleNextMonth={mockedBikeDatePicker.handleNextMonth}
        handleDateClick={mockedBikeDatePicker.handleDateClick}
      />,
    )
  })

  const user = userEvent

  it('should render the BikeDatePicker component', () => {
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

    expect(mockedBikeDatePicker.handlePrevMonth).toHaveBeenCalled()
  })

  it('should click on the previous month button', () => {
    const nextMonth = screen.getByTestId('date-picker-next-month')
    user.click(nextMonth)

    expect(mockedBikeDatePicker.handleNextMonth).toHaveBeenCalled()
  })
})
