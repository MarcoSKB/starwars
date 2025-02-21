import { Link } from 'react-router-dom'

import { Card } from '@components/ui'
import { SwapiFilm } from '@utils/types'
import useLocalData from '@/hooks/useLocalData'

interface Props {
  id: number
  data: SwapiFilm
}

const VehicleFilmCard: React.FC<Props> = ({ id, data }) => {
  const [filmData] = useLocalData({ id, ...data }, 'films')

  return (
    <Card>
      <p className='text-md mb-2 font-bold'>{filmData.title}</p>
      <span>Release date: {filmData.release_date}</span>
      <div className='mb-auto flex flex-col'>
        <span>Director: {filmData.director}</span>
        <span>Producer: {filmData.producer}</span>
      </div>
      <Link
        to={`/films/${id}`}
        className='text-accent border-accent mt-4 mr-[-16px] mb-[-16px] ml-auto w-fit border-t-1 border-l-1 px-4 py-2'
      >
        Learn more
      </Link>
    </Card>
  )
}

export default VehicleFilmCard
