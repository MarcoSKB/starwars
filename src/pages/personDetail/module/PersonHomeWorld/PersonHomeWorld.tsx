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
        <div>Loading...</div>
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
          src='/images/planet.jpg'
          className='w-full max-w-[320px] mix-blend-lighten'
          alt='Planet image'
        />
      </div>
    </div>
  )
}

export default PersonHomeWold
