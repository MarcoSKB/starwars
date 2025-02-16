import { SwapiPlanet } from '@utils/types'
import { useAppSelector } from '@utils/store'
import { Link } from '@components/ui'

interface Props {
  swapiPlanet: SwapiPlanet
}

const PlanetItem: React.FC<Props> = ({ swapiPlanet }) => {
  const planetId = swapiPlanet.url.split('/').filter((arg) => +arg)[0]
  const localPlanetData = useAppSelector((state) => state.planets).find(
    (planet) => planet.id == planetId,
  )

  const planetData = localPlanetData || swapiPlanet

  return (
    <tr className='flex w-full justify-between gap-2 md:gap-4'>
      <td className='border-accent flex flex-[25%] border-x-1 px-3'>
        <Link to={`/planets/${planetId}`} className='py-1 md:py-1.5'>
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
