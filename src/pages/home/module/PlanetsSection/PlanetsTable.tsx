import useFetchData from '@hooks/useFetchData'
import { SWAPI_BASE_URL } from '@utils/constants'
import { SwapiPlanetList } from '@utils/types'
import { ErrorComponent, Link } from '@components/ui'

const PlanetsTable = () => {
  const {
    data: planetsData,
    error,
    loading,
    refetch,
  } = useFetchData<SwapiPlanetList>(SWAPI_BASE_URL + 'planets')

  if (loading) {
    return (
      <div className='flex w-full flex-col gap-2'>
        <div className='bg-darkGray h-16 animate-pulse rounded-md opacity-40' />
        <div className='flex flex-col gap-2'>
          <div className='bg-darkGray h-100 animate-pulse rounded-md opacity-40' />
        </div>
      </div>
    )
  }

  if (error instanceof Error) {
    return (
      <ErrorComponent
        title="Couldn't get the data table, please try again later"
        error={error}
        refetch={refetch}
      />
    )
  }

  return (
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
          {planetsData?.results.map((planet) => (
            <tr
              key={planet.name}
              className='flex w-full justify-between gap-2 md:gap-4'
            >
              <td className='border-accent flex flex-[25%] border-x-1 px-3'>
                <Link
                  to={`/planets/${planet.url.split('/').filter((arg) => +arg)[0]}`}
                  className='py-1 md:py-1.5'
                >
                  {planet.name} ↵
                </Link>
              </td>
              <td className='border-accent flex-[25%] border-x-1 px-3 py-1 md:py-1.5'>
                {planet.diameter}
              </td>
              <td className='border-accent flex-[25%] border-x-1 px-3 py-1 md:py-1.5'>
                {planet.population}
              </td>
              <td className='border-accent flex-[25%] border-x-1 px-3 py-1 md:py-1.5'>
                {planet.terrain}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PlanetsTable
