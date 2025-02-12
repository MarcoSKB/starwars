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
                `hover:text-accent relative py-2 transition-all active:opacity-70 ${isActive ? 'text-accent pointer-events-none' : 'text-primary after:bg-accent after:absolute after:bottom-[6px] after:left-0 after:h-[2px] after:w-[10px] after:scale-0 after:transition-all after:content-[""] hover:after:w-full hover:after:scale-100'}`
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
