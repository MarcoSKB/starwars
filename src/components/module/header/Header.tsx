import { Link } from 'react-router-dom'
import { Navigation } from '@components/module'
import { Button, Container } from '@components/ui'

const Header = () => {
  return (
    <header>
      <Container>
        <div className='flex items-center justify-between py-5'>
          <Link to='/' className='flex h-14 w-30' title='To home page'>
            <img src='./images/logo.svg' alt='Logotype' />
          </Link>
          <Navigation />
          <Button title='Log out' onClick={() => console.log('Clicked')} />
        </div>
      </Container>
    </header>
  )
}

export default Header
