import { Navigate, useParams } from 'react-router-dom'

import { SWAPI_BASE_URL } from '@utils/constants'
import { SwapiPlanet } from '@utils/types'
import useFetchData from '@hooks/useFetchData'
import { Container } from '@components/ui'
import { PlanetInfo, PlanetResidentsList } from './module'

const PlanetDetailPage = () => {
  let { planetId } = useParams() as { planetId: string }
  const {
    data: planetData,
    error,
    loading,
  } = useFetchData<SwapiPlanet>(`${SWAPI_BASE_URL}planets/${planetId}`)

  if (error instanceof Error) {
    return <Navigate to='/' replace />
  }

  if (loading || !planetData) {
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
        <h1 className='font-jost text-accent mb-1 text-[30px] font-semibold md:mb-3 md:text-[52px]'>
          The planet {planetData?.name}
        </h1>
        <PlanetInfo id={+planetId} data={planetData} />
        <PlanetResidentsList residents={planetData.residents} />
      </section>
    </Container>
  )
}

export default PlanetDetailPage
