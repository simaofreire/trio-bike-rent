import { AxiosError } from 'axios'
import { REACT_APP_BOILERPLATE_USER_ID } from 'config'
import { format } from 'date-fns'
import Bike from 'models/Bike'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import apiClient from 'services/api'
import BikeDetails from './BikeDetails.component'

type StateReceived = {
  bike: Bike
}

const BikeDetailsContainer = () => {
  const { state } = useLocation()
  const [startDate, setStartDate] = useState<Date | null>(null)
  const [endDate, setEndDate] = useState<Date | null>(null)
  const [currentBikeData, setCurrentBikeData] = useState<Bike>()
  const [isBooked, setIsBooked] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleAddToBooking = async () => {
    if (!currentBikeData || !startDate || !endDate) return toast.warning('Please select dates.')
    try {
      setLoading(true)

      const body = {
        bikeId: +currentBikeData?.id,
        userId: +REACT_APP_BOILERPLATE_USER_ID,
        dateFrom: format(startDate, 'yyyy-MM-dd'),
        dateTo: format(endDate, 'yyyy-MM-dd'),
      }

      const { status } = await apiClient.post('bikes/rent', body)
      if (status === 200) {
        setIsBooked(true)
        setLoading(false)
        toast.success('Bike booked successfully!')
      }
    } catch (error: unknown | AxiosError) {
      console.error('Error while adding to booking', error)
      setLoading(false)
      if (error instanceof AxiosError) {
        toast.error(error?.response?.data.message)
      }
    }
  }

  useEffect(() => {
    if (state) {
      const { bike } = state as StateReceived
      setCurrentBikeData(bike)
    }
  }, [])

  return (
    <>
      <BikeDetails
        bike={currentBikeData}
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        handleAddToBooking={handleAddToBooking}
        isBooked={isBooked}
        loading={loading}
      />
      <ToastContainer />
    </>
  )
}

export default BikeDetailsContainer
