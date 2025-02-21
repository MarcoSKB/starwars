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
        <div className='mb-5 flex flex-col gap-3 py-4 md:mb-12'>
          <div className='bg-darkGray h-16 animate-pulse rounded-md opacity-40 md:w-[30%]' />
          <div className='bg-darkGray mb-2 flex h-32 animate-pulse rounded-md opacity-40 md:w-1/2' />
          <div className='bg-darkGray h-16 animate-pulse rounded-md opacity-40 md:w-[25%]' />
          <div className='bg-darkGray mb-2 flex h-60 w-full animate-pulse rounded-md opacity-40' />
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
