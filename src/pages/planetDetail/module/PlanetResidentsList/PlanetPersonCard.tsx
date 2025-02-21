import { SwapiPerson } from '@utils/types'
import { Card } from '@components/ui'
import useLocalData from '@/hooks/useLocalData'

interface Props {
  id: number
  data: SwapiPerson
}

const PlanetPersonCard: React.FC<Props> = ({ id, data }) => {
  const [personData] = useLocalData({ id, ...data }, 'people')
  return (
    <Card>
      <p className='text-md font-bold'>{personData.name}</p>
      <span>Birth year: {personData.birth_year}</span>
      <div className='flex flex-col'>
        <span>Height: {personData.height}</span>
        <span>Gender: {personData.gender}</span>
        <span>Mass: {personData.mass}</span>
      </div>
    </Card>
  )
}

export default PlanetPersonCard
