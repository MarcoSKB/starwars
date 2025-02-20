import { SwapiFilm } from '@utils/types'
import useLocalData from '@hooks/useLocalData'
import { Link } from '@components/ui'

interface Props {
  data: SwapiFilm
  id: number
}

const FilmItem: React.FC<Props> = ({ id, data }) => {
  const [FilmData] = useLocalData({ id, ...data }, 'films')

  return (
    <tr className='flex w-full justify-between gap-2 md:gap-4'>
      <td className='border-accent flex flex-[25%] border-x-1 px-3'>
        <Link to={`/films/${id}`} className='py-1 md:py-1.5'>
          {FilmData.title} ↵
        </Link>
      </td>
      <td className='border-accent flex-[25%] border-x-1 px-3 py-1 md:py-1.5'>
        {FilmData.director}
      </td>
      <td className='border-accent flex-[25%] border-x-1 px-3 py-1 md:py-1.5'>
        {FilmData.producer}
      </td>
      <td className='border-accent flex-[25%] border-x-1 px-3 py-1 md:py-1.5'>
        {FilmData.release_date}
      </td>
    </tr>
  )
}

export default FilmItem
