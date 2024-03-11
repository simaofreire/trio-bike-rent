import { Box, Breadcrumbs, Divider, Link, Typography } from '@mui/material'
import BikeImageSelector from 'components/BikeImageSelector'
import BikeSpecs from 'components/BikeSpecs'
import BikeType from 'components/BikeType'
import BookingAddressMap from 'components/BookingAddressMap'
import DatePicker from 'components/DatePicker'
import Header from 'components/Header'
import Bike from 'models/Bike'

import BookingConfirmation from 'components/BookingConfirmation/'
import { eachDayOfInterval } from 'date-fns'
import {
  BookingButton,
  BreadcrumbContainer,
  BreadcrumbHome,
  BreadcrumbSeparator,
  Content,
  DatePickerContainer,
  DetailsContainer,
  FavoriteIcon,
  InfoIcon,
  LikeButton,
  OverviewContainer,
  PickerAndOverviewContainer,
  PriceRow,
} from './BikeDetails.styles'
import { getServicesFee } from './BikeDetails.utils'

interface BikeDetailsProps {
  bike?: Bike
  startDate: Date | null
  endDate: Date | null
  setStartDate: (date: Date | null) => void
  setEndDate: (date: Date | null) => void
  handleAddToBooking: () => void
  isBooked?: boolean
  loading?: boolean
}

const BikeDetails = ({
  bike,
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  handleAddToBooking,
  isBooked,
  loading,
}: BikeDetailsProps) => {
  const checkHowManyDays = eachDayOfInterval({
    start: startDate as Date,
    end: endDate as Date,
  }).length
  const rateByDay = bike?.rate || 0
  const subtotal = checkHowManyDays * rateByDay
  const rateByWeek = rateByDay * 7
  const servicesFee = getServicesFee(rateByDay) * checkHowManyDays
  const total = checkHowManyDays * rateByDay + servicesFee

  return (
    <div data-testid='bike-details-page'>
      <Header />

      <BreadcrumbContainer data-testid='bike-details-breadcrumbs'>
        <Breadcrumbs separator={<BreadcrumbSeparator />}>
          <Link underline='hover' display='flex' alignItems='center' color='white' href='/' data-testid='return-home-button'>
            <BreadcrumbHome />
          </Link>

          <Typography fontWeight={800} letterSpacing={1} color='white'>
            {bike?.name}
          </Typography>
        </Breadcrumbs>
      </BreadcrumbContainer>

      <Content>
        <DetailsContainer variant='outlined' data-testid='bike-details-container'>
          {!!bike?.imageUrls && <BikeImageSelector imageUrls={bike.imageUrls} />}

          <BikeSpecs bodySize={bike?.bodySize} maxLoad={bike?.maxLoad} ratings={bike?.ratings} />

          <Divider />

          <Box marginY={2.25}>
            <Box display='flex' alignItems='center' justifyContent='space-between'>
              <div>
                <Typography
                  variant='h1'
                  fontSize={38}
                  fontWeight={800}
                  marginBottom={0.5}
                  data-testid='bike-name-details'
                >
                  {bike?.name}
                </Typography>

                <BikeType type={bike?.type} />
              </div>

              <LikeButton>
                <FavoriteIcon />
              </LikeButton>
            </Box>

            <Typography marginTop={1.5} fontSize={14}>
              {bike?.description}
            </Typography>
          </Box>

          <Divider />

          <Box marginY={2.25} data-testid='bike-prices-details'>
            <PriceRow>
              <Typography>Day</Typography>
              <Typography fontWeight={800} fontSize={24} letterSpacing={1}>
                {rateByDay} €
              </Typography>
            </PriceRow>

            <PriceRow>
              <Typography>Week</Typography>
              <Typography fontWeight={800} fontSize={24} letterSpacing={1}>
                {rateByWeek} €
              </Typography>
            </PriceRow>
          </Box>

          <Divider />

          <Box marginTop={3.25}>
            <Typography variant='h1' fontSize={24} fontWeight={800}>
              Full adress after booking
            </Typography>

            <BookingAddressMap />
          </Box>
        </DetailsContainer>

        {isBooked ? (
          <BookingConfirmation imageUrl={bike?.imageUrls[0]} name={bike?.name} type={bike?.type} />
        ) : (
          <PickerAndOverviewContainer variant='outlined'>
            <DatePickerContainer>
              <Typography variant='h2' fontSize={24} marginBottom={1.25} marginLeft={3}>
                Select date and time
              </Typography>
              <DatePicker
                startDate={startDate}
                endDate={endDate}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
              />
            </DatePickerContainer>

            <OverviewContainer data-testid='bike-overview-container'>
              <Typography variant='h2' fontSize={16} marginBottom={1.25}>
                Booking Overview
              </Typography>

              <Divider />

              <PriceRow marginTop={1.75} data-testid='bike-overview-single-price'>
                <Box display='flex' alignItems='center'>
                  <Typography marginRight={1}>Subtotal</Typography>
                  <InfoIcon fontSize='small' />
                </Box>

                <Typography>{subtotal} €</Typography>
              </PriceRow>

              <PriceRow marginTop={1.5} data-testid='bike-overview-single-price'>
                <Box display='flex' alignItems='center'>
                  <Typography marginRight={1}>Service Fee</Typography>
                  <InfoIcon fontSize='small' />
                </Box>

                <Typography>{servicesFee} €</Typography>
              </PriceRow>

              <PriceRow marginTop={1.75} data-testid='bike-overview-total'>
                <Typography fontWeight={800} fontSize={16}>
                  Total
                </Typography>
                <Typography variant='h2' fontSize={24} letterSpacing={1}>
                  {total} €
                </Typography>
              </PriceRow>

              <BookingButton
                fullWidth
                disableElevation
                variant='contained'
                data-testid='bike-booking-button'
                onClick={handleAddToBooking}
                disabled={loading}
              >
                Add to booking
              </BookingButton>
            </OverviewContainer>
          </PickerAndOverviewContainer>
        )}
      </Content>
    </div>
  )
}

export default BikeDetails
