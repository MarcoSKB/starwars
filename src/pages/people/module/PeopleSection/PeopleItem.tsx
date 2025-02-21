import { SwapiPerson } from '@utils/types'
import useLocalData from '@hooks/useLocalData'
import { Link } from '@components/ui'

interface Props {
  id: number
  data: SwapiPerson
}

const PeopleItem: React.FC<Props> = ({ id, data }) => {
  const [personData] = useLocalData({ id, ...data }, 'people')

  return (
    <tr className='flex w-full justify-between gap-2 md:gap-4'>
      <td className='border-accent flex flex-1 border-x-1 px-3'>
        <Link to={`/people/${id}`} className='py-1 md:py-1.5'>
          {personData.name}&#160;↵
        </Link>
      </td>
      <td className='border-accent flex-1 border-x-1 px-3 py-1 md:py-1.5'>
        {personData.gender}
      </td>
      <td className='border-accent flex flex-1 items-center gap-2 border-x-1 px-3 py-1 md:py-1.5'>
        {personData.hair_color}
      </td>
      <td className='border-accent flex-1 border-x-1 px-3 py-1 md:py-1.5'>
        {personData.birth_year}
      </td>
      <td className='border-accent flex-1 border-x-1 px-3 py-1 md:py-1.5'>
        {personData.height !== 'unknown'
          ? personData.height + ' cm'
          : personData.height}
      </td>
      <td className='border-accent flex-1 border-x-1 px-3 py-1 md:py-1.5'>
        {personData.mass !== 'unknown'
          ? personData.mass + ' kg'
          : personData.mass}
      </td>
    </tr>
  )
}

export default PeopleItem
