import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className='flex h-full flex-col items-center justify-center'>
      <p className='text-md'>Error 404</p>
      <h1 className='text-md mb-2 font-bold md:text-lg'>Page not found</h1>
      <Link
        to='/'
        className='text-accent transition-transform hover:translate-x-3'
        replace
      >
        → Go to home page
      </Link>
    </div>
  )
}

export default NotFoundPage
