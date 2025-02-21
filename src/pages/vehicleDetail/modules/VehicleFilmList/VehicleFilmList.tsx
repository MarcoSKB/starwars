import { SwapiVehicle } from '@utils/types'
import { H2 } from '@components/ui'
import VehicleFilmItem from './VehicleFilmItem'

interface Props {
  films: SwapiVehicle['films']
}

const VehicleFilmList: React.FC<Props> = ({ films }) => {
  if (!films.length) {
    return (
      <>
        <H2>The Films</H2>
        <span className='md:text-subtitle text-base'>
          This vehicle did not appear in the films.
        </span>
      </>
    )
  }

  return (
    <>
      <H2>The Films</H2>
      <ul className='flex snap-x gap-x-4 gap-y-8 overflow-x-scroll sm:grid sm:grid-cols-2 sm:overflow-x-auto md:grid-cols-3 lg:grid-cols-4'>
        {films.map((film) => (
          <li
            key={film}
            className='min-w-[320px] snap-center pt-[15px] pl-[15px] sm:min-w-auto'
          >
            <VehicleFilmItem film={film} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default VehicleFilmList
