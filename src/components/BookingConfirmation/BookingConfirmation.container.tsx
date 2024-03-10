import BookingConfirmationComponent from './BookingConfirmation.component'

export interface BookingConfirmationProps {
  imageUrl?: string
  name?: string
  type?: string
}

const BookingConfirmation = ({ imageUrl, name, type }: BookingConfirmationProps) => {
  return <BookingConfirmationComponent imageUrl={imageUrl} name={name} type={type} />
}

export default BookingConfirmation
