import { render, screen } from '@testing-library/react'
import { mockedBookingConfirmation } from 'mocks/Bike'
import BookingConfirmation from './BookingConfirmation.container'

describe('BookingConfirmation', () => {
  beforeEach(() => {
    render(
      <BookingConfirmation
        imageUrl={mockedBookingConfirmation.imageUrl}
        name={mockedBookingConfirmation.name}
        type={mockedBookingConfirmation.type}
      />,
    )
  })

  it('should render the BookingConfirmation component', () => {
    const bookingConfirmation = screen.getByTestId('booking-confirmation')
    expect(bookingConfirmation).toBeInTheDocument()
  })

  it('should render the acknowledgment message', () => {
    const acknowledgment = screen.getByText('Thank you!')

    expect(acknowledgment).toBeInTheDocument()
  })

  it('should render the bike confirmation message', () => {
    const confirmationMessage = screen.getByText('Your bike is booked.')

    expect(confirmationMessage).toBeInTheDocument()
  })

  it('should render the booked bike image', () => {
    const image = screen.getByTestId('booking-confirmation-image')
    expect(image).toBeInTheDocument()
  })

  it('should render the bike name', () => {
    const bikeName = screen.getByTestId('booking-confirmation-bike-name')

    expect(bikeName).toBeInTheDocument()
  })
  it('should render the bike type', () => {
    const bikeType = screen.getByText(mockedBookingConfirmation.type)

    expect(bikeType).toBeInTheDocument()
  })
})
