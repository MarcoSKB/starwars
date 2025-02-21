import { SwapiPerson } from '@utils/types'
import useFetchData from '@hooks/useFetchData'
import { ErrorComponent } from '@components/ui'
import PlanetPersonCard from './PlanetPersonCard'

interface Props {
  resident: string
}

const PlanetResidentItem: React.FC<Props> = ({ resident }) => {
  const {
    data: personData,
    error,
    loading,
  } = useFetchData<SwapiPerson>(resident)

  if (error instanceof Error) {
    return <ErrorComponent error={error} />
  }

  if (loading || !personData) {
    return <div className='bg-darkGray flex h-36 w-full animate-pulse' />
  }

  return (
    <PlanetPersonCard
      id={+personData.url.split('/').filter((arg) => +arg)[0]}
      data={personData}
    />
  )
}

export default PlanetResidentItem
