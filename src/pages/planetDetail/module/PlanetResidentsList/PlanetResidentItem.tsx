import { SwapiPerson } from '@utils/types'
import useFetchData from '@hooks/useFetchData'
import { ErrorComponent } from '@components/ui'

interface Props {
  resident: string
}

const PlanetResidentItem: React.FC<Props> = ({ resident }) => {
  const {
    data: personData,
    error,
    loading,
  } = useFetchData<SwapiPerson>(resident)

  if (loading) {
    return <div className='bg-darkGray flex h-36 w-full animate-pulse' />
  }

  if (error instanceof Error) {
    return <ErrorComponent error={error} />
  }

  return (
    <div className='border-accent before:border-primary relative box-border flex w-full flex-col border-2 border-solid bg-[#121212] px-4 py-4 before:absolute before:top-[-15px] before:left-[-15px] before:z-[-1] before:h-full before:w-full before:border-2 before:border-solid before:content-[""]'>
      <p className='text-md font-bold'>{personData?.name}</p>
      <span>Birth year: {personData?.birth_year}</span>
      <div className='flex flex-col'>
        <span>Height: {personData?.height}</span>
        <span>Gender: {personData?.gender}</span>
        <span>Mass: {personData?.mass}</span>
      </div>
    </div>
  )
}

export default PlanetResidentItem
