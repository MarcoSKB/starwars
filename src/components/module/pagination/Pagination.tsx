import { SetURLSearchParams } from 'react-router-dom'
import PaginationControl from './PaginationController'
import { arrayRangeNumber } from '@utils/helpers'

interface Props {
  totalCount: number
  currentPage: number
  perPageCount?: number
  siblingsCount?: number
  setSearchParams: SetURLSearchParams
}

const Pagination: React.FC<Props> = (props) => {
  const {
    totalCount,
    currentPage,
    perPageCount = 10,
    siblingsCount = 1.5,
    setSearchParams,
  } = props

  const minPageValue = 1
  const maxPageValue = Math.ceil(totalCount / perPageCount)

  const smallPageLength = maxPageValue <= siblingsCount * 2 + 1
  const isCloseToMin =
    minPageValue <= currentPage &&
    minPageValue + (siblingsCount + 1) >= currentPage
  const isCloseToMax =
    maxPageValue >= currentPage &&
    maxPageValue - (siblingsCount + 1) <= currentPage

  const onClickHandler = (value: string) => {
    setSearchParams({
      page: value,
    })
  }

  if (totalCount == 0) {
    return null
  }

  if (smallPageLength) {
    return (
      <PaginationControl
        onClickHandler={onClickHandler}
        currentPage={currentPage}
        paginationData={arrayRangeNumber(minPageValue, maxPageValue).map(
          String,
        )}
      />
    )
  }

  if (isCloseToMin) {
    return (
      <PaginationControl
        onClickHandler={onClickHandler}
        currentPage={currentPage}
        paginationData={[
          ...arrayRangeNumber(1, siblingsCount * 2 + 1),
          '...',
          maxPageValue,
        ].map(String)}
      />
    )
  }

  if (isCloseToMax) {
    return (
      <PaginationControl
        onClickHandler={onClickHandler}
        currentPage={currentPage}
        paginationData={[
          minPageValue,
          '...',
          ...arrayRangeNumber(maxPageValue - siblingsCount * 2, maxPageValue),
        ].map(String)}
      />
    )
  }

  return (
    <PaginationControl
      onClickHandler={onClickHandler}
      currentPage={currentPage}
      paginationData={[
        minPageValue,
        '...',
        ...arrayRangeNumber(
          currentPage - siblingsCount,
          currentPage + siblingsCount,
        ),
        '...',
        maxPageValue,
      ].map(String)}
    />
  )
}

export default Pagination
