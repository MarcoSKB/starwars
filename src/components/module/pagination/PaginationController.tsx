import { Button } from '@components/ui'

interface Props {
  paginationData: string[]
  onClickHandler: (value: string) => void
  currentPage: number
}

const PaginationControl: React.FC<Props> = (props) => {
  const { paginationData, onClickHandler, currentPage } = props
  return (
    <div className='flex justify-center gap-1 text-[13px] sm:gap-2 sm:text-base md:gap-4'>
      {paginationData.map((buttonValue, index) => (
        <Button
          key={index}
          onClick={() => onClickHandler(buttonValue)}
          disabled={
            buttonValue == currentPage.toString() || buttonValue == '...'
          }
        >
          {buttonValue}
        </Button>
      ))}
    </div>
  )
}

export default PaginationControl
