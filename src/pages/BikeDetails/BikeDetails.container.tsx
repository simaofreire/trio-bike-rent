import { format } from 'date-fns'
import Bike from 'models/Bike'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import apiClient from 'services/api'
import BikeDetails from './BikeDetails.component'

type StateReceived = {
  bike: Bike
}

const BikeDetailsContainer = () => {
  const { state } = useLocation()

  const [startDate, setStartDate] = useState<Date | string>('')
  const [endDate, setEndDate] = useState<Date | string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [currentBikeData, setCurrentBikeData] = useState<Bike>()

  const getBikeRentAmount = async () => {
    try {
      setLoading(true)
      const formData = new FormData()
      formData.append('bikeId', String(currentBikeData?.id))
      formData.append('userId', String(process.env.REACT_APP_BOILERPLATE_CANDIDATE_ID))
      formData.append('dateFrom', format(startDate, 'yyyy-MM-dd'))
      formData.append('dateTo', format(endDate, 'yyyy-MM-dd'))

      const { status, data } = await apiClient.post(
        '/bikes/amount',
        { data: formData },
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        },
      )

      setLoading(false)
    } catch (error) {
      console.error('Error getting bike rent amount', error)
      setLoading(false)
    }
  }

  useEffect(() => {
    if (state) {
      const { bike } = state as StateReceived
      setCurrentBikeData(bike)
    }
  }, [])

  useEffect(() => {
    if (startDate && endDate) getBikeRentAmount()
  }, [endDate])

  return (
    <BikeDetails
      bike={currentBikeData}
      startDate={startDate}
      endDate={endDate}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
      getBikeRentAmount={getBikeRentAmount}
      loading={loading}
    />
  )
}

export default BikeDetailsContainer
