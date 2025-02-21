import { Navigate, useParams } from 'react-router-dom'

import { SWAPI_BASE_URL } from '@utils/constants'
import { SwapiFilm } from '@utils/types'
import useFetchData from '@hooks/useFetchData'
import { Container, H2, Subtitle } from '@components/ui'
import { FilmInfo } from './modules'

const FilmDetailPage = () => {
  let { filmId } = useParams() as { filmId: string }
  const {
    data: filmData,
    error,
    loading,
  } = useFetchData<SwapiFilm>(`${SWAPI_BASE_URL}films/${filmId}`)

  if (error instanceof Error) {
    return <Navigate to='/films' />
  }

  if (loading || !filmData) {
    return (
      <Container>
        <div className='bg-darkGray mb-5 h-[200px] w-full animate-pulse rounded-xl md:mb-10 md:h-[320px]' />
        <div className='bg-darkGray mb-3 h-[50px] w-1/2 animate-pulse rounded-md' />
        <div className='bg-darkGray mb-5 h-[100px] w-full animate-pulse rounded-md md:mb-10 md:h-[150px] md:w-[40%]' />
        <div className='bg-darkGray mb-3 h-[88px] w-full animate-pulse md:h-[44px]' />
        <div className='bg-darkGray mb-3 h-[88px] w-full animate-pulse md:h-[44px]' />
        <div className='bg-darkGray mb-3 h-[88px] w-full animate-pulse md:h-[44px]' />
      </Container>
    )
  }

  return (
    <Container>
      <section className='flex flex-col pt-8'>
        <div className='relative z-0 mb-5 flex h-[200px] w-full items-center justify-center overflow-hidden p-4 md:mb-10 md:h-[320px]'>
          <img
            src='/images/film-poster.jpg'
            className='pointer-events-none absolute top-0 left-0 -z-10 mb-4 h-full w-full rounded-xl bg-black object-cover object-[0%_10%] opacity-80'
            alt='Film poster'
          />
          <h1 className='font-jost mb-2 text-center text-[22px] font-bold text-balance sm:text-[40px] md:text-[50px] lg:text-[60px]'>
            The Film - <span className='text-accent'>{filmData?.title}</span>
          </h1>
        </div>
        <H2>Description</H2>
        <Subtitle className='mb-10'>{filmData.opening_crawl}</Subtitle>
        <FilmInfo id={+filmId} data={filmData} />
      </section>
    </Container>
  )
}

export default FilmDetailPage
