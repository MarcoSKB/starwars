import { Link } from 'react-router-dom'
import { Navigation } from '@components/module'
import { Button, Container } from '@components/ui'

const Header = () => {
  return (
    <header>
      <Container>
        <div className='flex flex-[30%] flex-row flex-wrap items-center justify-evenly gap-4 py-3 sm:justify-between sm:gap-6 sm:py-5'>
          <Link
            to='/'
            className='mr-auto flex h-10 w-20 md:mr-0 md:h-14 md:w-30'
            title='To home page'
          >
            <img src='./images/logo.svg' alt='Logotype' />
          </Link>
          <Navigation />
          <div className='w-full max-w-20 md:max-w-30'>
            <Button title='Log out' onClick={() => console.log('Clicked')} />
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
