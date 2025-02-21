import { SwapiFilm, SwapiVehicle } from '@utils/types'
import useFetchData from '@hooks/useFetchData'
import { ErrorComponent } from '@components/ui'
import VehicleFilmCard from './VehicleFilmCard'

interface Props {
  film: SwapiVehicle['films'][number]
}

const VehicleFilmItem: React.FC<Props> = ({ film }) => {
  const { data: filmData, error, loading } = useFetchData<SwapiFilm>(film)

  if (loading || !filmData) {
    return <div className='bg-darkGray flex h-40 w-full animate-pulse' />
  }

  if (error instanceof Error) {
    return <ErrorComponent error={error} />
  }

  return (
    <VehicleFilmCard
      id={+filmData.url.split('/').filter((arg) => +arg)[0]}
      data={filmData}
    />
  )
}

export default VehicleFilmItem
