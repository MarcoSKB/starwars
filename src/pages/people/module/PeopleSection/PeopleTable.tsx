import { useSearchParams } from 'react-router-dom'

import { SWAPI_BASE_URL } from '@utils/constants'
import { SwapiPersonList } from '@utils/types'
import useFetchData from '@hooks/useFetchData'
import { Pagination } from '@components/module'
import { ErrorComponent } from '@components/ui'
import PeopleItem from './PeopleItem'

const PeopleTable = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const currentPage = searchParams.get('page')
    ? Number(searchParams.get('page'))
    : 1
  const {
    data: peopleData,
    error,
    loading,
  } = useFetchData<SwapiPersonList>(
    `${SWAPI_BASE_URL}people/?page=${currentPage}`,
    {},
    [currentPage],
  )

  if (error instanceof Error) {
    return (
      <ErrorComponent
        title="Couldn't get the people data, please try again"
        error={error}
        refetch={() => setSearchParams({ page: '1' })}
      />
    )
  }

  if (loading || !peopleData) {
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
              <th className='flex-1'>Name</th>
              <th className='flex-1'>Gender</th>
              <th className='flex-1'>Hair color</th>
              <th className='flex-1'>Birth year</th>
              <th className='flex-1'>Height</th>
              <th className='flex-1'>Mass</th>
            </tr>
          </thead>
          <tbody className='flex w-full flex-col py-4'>
            {peopleData.results.map((people) => (
              <PeopleItem
                key={people.url}
                data={people}
                id={+people.url.split('/').filter((arg) => +arg)[0]}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div className='mx-auto py-5 md:py-10'>
        <Pagination
          currentPage={+currentPage}
          totalCount={peopleData.count}
          setSearchParams={setSearchParams}
        />
      </div>
    </>
  )
}

export default PeopleTable
