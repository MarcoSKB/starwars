import { Navigate, useParams } from 'react-router-dom'

import { SWAPI_BASE_URL } from '@utils/constants'
import { SwapiPerson } from '@utils/types'
import useFetchData from '@hooks/useFetchData'
import { Container } from '@components/ui'
import { PersonInfo, PersonHomeWorld } from './module'

const PersonDetailPage = () => {
  let { personId } = useParams() as { personId: string }
  const {
    data: personData,
    error,
    loading,
  } = useFetchData<SwapiPerson>(`${SWAPI_BASE_URL}people/${personId}`)

  if (error instanceof Error) {
    return <Navigate to='/' replace />
  }

  if (loading || !personData) {
    return (
      <Container>
        <div className='mb-5 flex flex-col gap-3 py-4 md:mb-6'>
          <div className='bg-darkGray h-16 animate-pulse rounded-md opacity-40 md:w-[30%]' />
          <div className='bg-darkGray mb-2 flex h-60 animate-pulse rounded-md opacity-40 md:w-1/2' />
        </div>
        <div className='flex w-full flex-col gap-4'>
          <div className='bg-darkGray h-20 w-1/2 animate-pulse rounded-md opacity-40' />
          <div className='flex w-full flex-col justify-between gap-5 md:flex-row md:gap-2'>
            <div className='bg-darkGray h-60 w-[40%] animate-pulse rounded-md opacity-40' />
            <div className='bg-darkGray h-[320px] w-full max-w-[320px] animate-pulse rounded-md opacity-40' />
          </div>
        </div>
      </Container>
    )
  }

  return (
    <Container>
      <section className='mb-5 flex flex-col py-4 md:mb-12'>
        <h1 className='font-jost mb-1 text-[30px] font-semibold md:mb-3 md:text-[52px]'>
          The person - <span className='text-accent'>{personData.name}</span>
        </h1>
        <PersonInfo id={+personId} data={personData} />
        <PersonHomeWorld url={personData.homeworld} />
      </section>
    </Container>
  )
}

export default PersonDetailPage
