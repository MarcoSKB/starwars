import { Link } from '@components/ui'

const NotFoundPage = () => {
  return (
    <div className='relative flex h-full flex-col items-center justify-center py-12'>
      <p className='pointer-events-none absolute top-[46%] left-1/2 -translate-1/2 text-[160px] leading-0 font-bold opacity-10 sm:text-[200px] md:text-[300px]'>
        404
      </p>
      <p className='text-md'>Error 404</p>
      <h1 className='text-md mb-2 font-bold md:text-lg'>Page not found</h1>
      <Link to='/' replace>
        → Go to home page
      </Link>
    </div>
  )
}

export default NotFoundPage
