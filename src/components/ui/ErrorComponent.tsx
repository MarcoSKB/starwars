import { Button } from '@components/ui'

interface Props {
  title?: string
  error: Error
  refetch?: () => void
}

const ErrorComponent: React.FC<Props> = (props) => {
  const {
    title = 'Oops, something went wrong, please try again later!',
    error,
    refetch,
  } = props

  return (
    <div className='flex w-fit flex-col gap-1 py-2'>
      <p className='text-md text-red-400'>{title}</p>
      <p className='text-md mb-3'>{error.message}</p>
      {refetch && (
        <Button onClick={refetch} className='max-w-[200px]'>
          Try again
        </Button>
      )}
    </div>
  )
}

export default ErrorComponent
