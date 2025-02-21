import { H2 } from '@components/ui'
import PlanetResidentItem from './PlanetResidentItem'

interface Props {
  residents: string[]
}

const PlanetResidentsList: React.FC<Props> = ({ residents }) => {
  if (!residents.length) {
    return (
      <>
        <H2>Residents</H2>
        <span className='md:text-subtitle text-base'>
          No known residents on this planet
        </span>
      </>
    )
  }

  return (
    <>
      <H2>Residents</H2>
      <ul className='flex snap-x gap-x-4 gap-y-8 overflow-x-scroll sm:grid sm:grid-cols-2 sm:overflow-x-auto md:grid-cols-3 lg:grid-cols-4'>
        {residents.map((resident) => (
          <li
            key={resident}
            className='min-w-[320px] snap-center pt-[15px] pl-[15px] sm:min-w-auto'
          >
            <PlanetResidentItem resident={resident} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default PlanetResidentsList
