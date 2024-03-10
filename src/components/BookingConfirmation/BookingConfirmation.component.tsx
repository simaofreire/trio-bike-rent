import { Typography } from '@mui/material'
import BikeType from 'components/BikeType'
import { BookingConfirmationProps } from './BookingConfirmation.container'
import { Container, Image } from './BookingConfirmation.styles'

const BookingConfirmationComponent = ({ imageUrl, name, type }: BookingConfirmationProps) => {
  return (
    <Container data-testid='booking-confirmation'>
      <Typography
        variant='h1'
        fontSize={24}
        marginTop={5}
        color='black'
        fontWeight='bold'
        data-testid='booking-confirmation-acknowledgment'
      >
        Thank you!
      </Typography>
      <Typography
        variant='h2'
        fontSize={17}
        marginTop={3}
        fontWeight='regular'
        color='black'
        data-testid='booking-confirmation-message'
      >
        Your bike is booked.
      </Typography>
      <Image src={imageUrl} data-testid='booking-confirmation-image' />
      <Typography
        variant='h2'
        marginTop={2}
        fontSize={18}
        fontWeight='semibold'
        color='black'
        data-testid='booking-confirmation-bike-name'
      >
        {name}
      </Typography>
      <BikeType type={type} data-testid='booking-confirmation-bike-type' />
    </Container>
  )
}

export default BookingConfirmationComponent
