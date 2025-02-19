import { SwapiPlanet } from '@utils/types'
import useLocalData from '@hooks/useLocalData'
import { Link } from '@components/ui'

interface Props {
  data: SwapiPlanet
  id: number
}

const PlanetItem: React.FC<Props> = ({ id, data }) => {
  const [planetData] = useLocalData({ id, ...data }, 'planets')

  return (
    <tr className='flex w-full justify-between gap-2 md:gap-4'>
      <td className='border-accent flex flex-[25%] border-x-1 px-3'>
        <Link to={`/planets/${id}`} className='py-1 md:py-1.5'>
          {planetData.name} ↵
        </Link>
      </td>
      <td className='border-accent flex-[25%] border-x-1 px-3 py-1 md:py-1.5'>
        {planetData.diameter}
      </td>
      <td className='border-accent flex-[25%] border-x-1 px-3 py-1 md:py-1.5'>
        {planetData.population}
      </td>
      <td className='border-accent flex-[25%] border-x-1 px-3 py-1 md:py-1.5'>
        {planetData.terrain}
      </td>
    </tr>
  )
}

export default PlanetItem
