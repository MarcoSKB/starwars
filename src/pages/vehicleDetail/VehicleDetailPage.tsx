import { Navigate, useParams } from 'react-router-dom'

import { SWAPI_BASE_URL } from '@utils/constants'
import { SwapiVehicle } from '@utils/types'
import useFetchData from '@hooks/useFetchData'
import { Container } from '@components/ui'
import { VehicleInfo, VehicleFilmList } from './modules'

const VehicleDetailPage = () => {
  let { vehicleId } = useParams() as { vehicleId: string }
  const {
    data: vehicleData,
    error,
    loading,
  } = useFetchData<SwapiVehicle>(`${SWAPI_BASE_URL}vehicles/${vehicleId}`)

  if (error instanceof Error) {
    return <Navigate to='/' replace />
  }

  if (loading || !vehicleData) {
    return (
      <Container>
        <div className='mb-5 flex flex-col gap-3 py-6 md:mb-12'>
          <div className='bg-darkGray h-16 animate-pulse rounded-md opacity-40 md:w-[30%]' />
          <div className='bg-darkGray mb-2 flex h-32 animate-pulse rounded-md opacity-40 md:w-1/2' />
          <div className='bg-darkGray h-16 animate-pulse rounded-md opacity-40 md:w-[25%]' />
          <div className='bg-darkGray mb-2 flex h-60 w-full animate-pulse rounded-md opacity-40' />
        </div>
      </Container>
    )
  }

  return (
    <Container>
      <section className='mb-5 flex flex-col py-6 md:mb-12'>
        <h1 className='font-jost mb-1 text-[30px] font-semibold md:mb-3 md:text-[52px]'>
          The vehicle <span className='text-accent'>{vehicleData?.name}</span>
        </h1>
        {vehicleData && (
          <>
            <VehicleInfo id={+vehicleId} data={vehicleData} />
            <VehicleFilmList films={vehicleData.films} />
          </>
        )}
      </section>
    </Container>
  )
}

export default VehicleDetailPage
