import { SwapiPlanet } from '@utils/types'
import useLocalData from '@hooks/useLocalData'
import { Subtitle } from '@components/ui'

interface Props {
  id: number
  data: SwapiPlanet
}

const HomeWorldInfo: React.FC<Props> = ({ id, data }) => {
  const [planetData] = useLocalData({ id, ...data }, 'planets')

  return (
    <div className='flex flex-col'>
      <Subtitle className='text-md flex flex-col gap-2'>
        <span className='text-md font-medium md:text-lg'>
          The Planet name:
          <span className='text-accent'> {planetData.name}</span>
        </span>
        <span>Diameter: {planetData.diameter} km</span>
        <span>Population: {planetData.population}</span>
        <span>Terrain: {planetData.terrain}</span>
        <span>Rotation period: {planetData.rotation_period}</span>
      </Subtitle>
    </div>
  )
}

export default HomeWorldInfo
