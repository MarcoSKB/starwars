import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()
  let errorMessage: string
  let errorStatus: number | undefined

  if (isRouteErrorResponse(error)) {
    errorMessage = error.data.message || error.statusText
    errorStatus = error.status
  } else if (error instanceof Error) {
    errorMessage = error.message
  } else if (typeof error === 'string') {
    errorMessage = error
  } else {
    console.error(error)
    errorMessage = 'Unknown error'
  }

  return (
    <div className='flex flex-col items-center gap-2'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      {errorStatus && <p>Error status code: {errorStatus}</p>}
      <span>{errorMessage}</span>
    </div>
  )
}

export default ErrorPage
