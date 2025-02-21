import { useSearchParams } from 'react-router-dom'

import useFetchData from '@hooks/useFetchData'
import { SWAPI_BASE_URL } from '@utils/constants'
import { SwapiPlanetList } from '@utils/types'
import { Pagination } from '@components/module'
import { ErrorComponent } from '@components/ui'
import PlanetItem from './PlanetItem'

const PlanetsTable = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const currentPage = searchParams.get('page')
    ? Number(searchParams.get('page'))
    : 1
  const {
    data: planetsData,
    error,
    loading,
  } = useFetchData<SwapiPlanetList>(
    `${SWAPI_BASE_URL}planets/?page=${currentPage}`,
    {},
    [currentPage],
  )

  if (error instanceof Error) {
    return (
      <ErrorComponent
        title="Couldn't get the data table, please try again later"
        error={error}
        refetch={() => setSearchParams({ page: '1' })}
      />
    )
  }

  if (loading || !planetsData) {
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
              <th className='flex-[25%]'>Planet name</th>
              <th className='flex-[25%]'>Diameter</th>
              <th className='flex-[25%]'>Population</th>
              <th className='flex-[25%]'>Terrain</th>
            </tr>
          </thead>
          <tbody className='flex w-full flex-col py-4'>
            {planetsData.results.map((planet) => (
              <PlanetItem
                key={planet.url}
                data={planet}
                id={+planet.url.split('/').filter((arg) => +arg)[0]}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div className='mx-auto py-5 md:py-10'>
        <Pagination
          currentPage={currentPage ? +currentPage : 1}
          totalCount={planetsData.count}
          setSearchParams={setSearchParams}
        />
      </div>
    </>
  )
}

export default PlanetsTable
