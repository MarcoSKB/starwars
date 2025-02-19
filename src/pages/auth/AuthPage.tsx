import { Navigate } from 'react-router-dom'
import { useAppSelector } from '@/utils/store'
import { Container } from '@/components/ui'
import AuthForm from './module/AuthForm'

const AuthPage = () => {
  const isAuthed = useAppSelector((state) => state.auth.isAuthenticated)

  if (isAuthed) {
    return <Navigate to='/' replace />
  }

  return (
    <Container>
      <main className='flex min-h-svh w-full items-center justify-center'>
        <div className='border-primary relative my-[42px] flex w-full max-w-[400px] flex-col items-end gap-3 border-2 border-solid bg-[#121212] px-4 py-4 pt-[42px] sm:px-10 sm:py-6'>
          <img
            src='./images/logo.svg'
            className='absolute top-0 left-[50%] z-0 w-32 translate-x-[-50%] translate-y-[-50%] bg-[#121212] px-2'
            alt='Logotype'
          />
          <span className='sm:text-md w-full text-center text-base font-bold text-pretty'>
            Please log in to access the site
          </span>
          <AuthForm />
        </div>
      </main>
    </Container>
  )
}

export default AuthPage
