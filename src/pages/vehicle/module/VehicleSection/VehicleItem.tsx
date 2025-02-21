import { SwapiVehicle } from '@/utils/types'
import useLocalData from '@hooks/useLocalData'
import { Link } from '@components/ui'

interface Props {
  data: SwapiVehicle
  id: number
}

const VehicleItem: React.FC<Props> = ({ id, data }) => {
  const [vehicleData] = useLocalData({ id, ...data }, 'vehicle')

  return (
    <tr className='flex w-full justify-between gap-2 md:gap-4'>
      <td className='border-accent flex flex-[20%] border-x-1 px-3'>
        <Link to={`/vehicle/${id}`} className='py-1 md:py-1.5'>
          {vehicleData.name} ↵
        </Link>
      </td>
      <td className='border-accent flex-[20%] border-x-1 px-3 py-1 md:py-1.5'>
        {vehicleData.model}
      </td>
      <td className='border-accent flex-[20%] border-x-1 px-3 py-1 md:py-1.5'>
        {vehicleData.vehicle_class}
      </td>
      <td className='border-accent flex-[20%] border-x-1 px-3 py-1 md:py-1.5'>
        {vehicleData.cost_in_credits}
      </td>
      <td className='border-accent flex-[20%] border-x-1 px-3 py-1 md:py-1.5'>
        {vehicleData.cargo_capacity}
      </td>
    </tr>
  )
}

export default VehicleItem
