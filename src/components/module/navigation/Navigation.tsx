import { NavLink } from 'react-router-dom'

const navList = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'Films',
    link: 'films',
  },
  {
    title: 'Vehicle',
    link: 'vehicle',
  },
  {
    title: 'People',
    link: 'people',
  },
]

const Navigation = () => {
  return (
    <nav>
      <ul className='text-md flex gap-6 font-semibold'>
        {navList.map(({ title, link }) => (
          <li key={link} className='font-jost'>
            <NavLink
              to={link}
              className={({ isActive }) =>
                isActive ? 'text-accent' : 'text-primary'
              }
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
