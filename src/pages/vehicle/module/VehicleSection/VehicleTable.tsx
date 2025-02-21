import { useSearchParams } from 'react-router-dom'

import { SWAPI_BASE_URL } from '@utils/constants'
import { SwapiVehicleList } from '@utils/types'
import useFetchData from '@hooks/useFetchData'
import { Pagination } from '@components/module'
import { ErrorComponent } from '@components/ui'
import VehicleItem from './VehicleItem'

const VehicleTable = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const currentPage = searchParams.get('page')
    ? Number(searchParams.get('page'))
    : 1
  const {
    data: vehicleData,
    error,
    loading,
  } = useFetchData<SwapiVehicleList>(
    `${SWAPI_BASE_URL}vehicles/?page=${currentPage}`,
    {},
    [currentPage],
  )

  if (error instanceof Error) {
    return (
      <ErrorComponent
        title="Couldn't get the vehicle data, please try again"
        error={error}
        refetch={() => setSearchParams({ page: '1' })}
      />
    )
  }

  if (loading || !vehicleData) {
    return (
      <div className='flex flex-col gap-5 md:gap-10'>
        <div className='flex w-full flex-col gap-2'>
          <div className='bg-darkGray h-16 animate-pulse rounded-md opacity-40' />
          <div className='flex flex-col gap-2'>
            <div className='bg-darkGray h-100 animate-pulse rounded-md opacity-40' />
          </div>
        </div>
        <div className='bg-darkGray h-11 animate-pulse rounded-md opacity-40' />
      </div>
    )
  }

  return (
    <>
      <div className='overflow-x-auto'>
        <table className='font-jost flex w-full min-w-[720px] flex-col border-b-1 border-solid px-2 pt-5'>
          <thead>
            <tr className='text-md flex w-full justify-between border-y-1 py-2 md:py-5'>
              <th className='flex-[20%]'>Vehicle Name</th>
              <th className='flex-[20%]'>Model</th>
              <th className='flex-[20%]'>Vehicle Class</th>
              <th className='flex-[20%]'>Price</th>
              <th className='flex-[20%]'>Cargo capacity</th>
            </tr>
          </thead>
          <tbody className='flex w-full flex-col py-4'>
            {vehicleData.results.map((film) => (
              <VehicleItem
                key={film.url}
                data={film}
                id={+film.url.split('/').filter((arg) => +arg)[0]}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div className='mx-auto py-5 md:py-10'>
        <Pagination
          currentPage={+currentPage}
          totalCount={vehicleData.count}
          setSearchParams={setSearchParams}
        />
      </div>
    </>
  )
}

export default VehicleTable
