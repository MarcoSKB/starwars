import { SwapiPerson, SwapiPlanet } from '@utils/types'
import useFetchData from '@hooks/useFetchData'
import { ErrorComponent, H2 } from '@components/ui'
import HomeWorldInfo from './HomeWorldInfo'

interface Props {
  url: SwapiPerson['homeworld']
}

const PersonHomeWold: React.FC<Props> = ({ url }) => {
  const { data: worldData, error, loading } = useFetchData<SwapiPlanet>(url)

  if (error instanceof Error) {
    return <ErrorComponent error={error} />
  }

  if (loading || !worldData) {
    return (
      <>
        <div className='flex w-full flex-col gap-4'>
          <div className='bg-darkGray h-20 w-1/2 animate-pulse rounded-md opacity-40' />
          <div className='flex w-full flex-col justify-between gap-5 md:flex-row md:gap-2'>
            <div className='bg-darkGray h-60 w-[40%] animate-pulse rounded-md opacity-40' />
            <div className='bg-darkGray h-[320px] w-full max-w-[320px] animate-pulse rounded-md opacity-40' />
          </div>
        </div>
      </>
    )
  }

  return (
    <div>
      <H2>Homeworld</H2>
      <div className='flex w-full flex-col justify-between gap-5 md:flex-row md:gap-2'>
        <HomeWorldInfo
          id={+worldData.url.split('/').filter((arg) => +arg)[0]}
          data={worldData}
        />
        <img
          src={import.meta.env.BASE_URL + '/images/planet.jpg'}
          className='w-full max-w-[320px] mix-blend-lighten'
          alt='Planet image'
        />
      </div>
    </div>
  )
}

export default PersonHomeWold
