import { Link as RouterLink, To } from 'react-router-dom'

interface Props extends React.InputHTMLAttributes<HTMLAnchorElement> {
  to: To
  children: React.ReactNode
  replace?: boolean
}

const Link: React.FC<Props> = (props) => {
  const { children, to, replace = false, className, ...prop } = props
  return (
    <RouterLink
      to={to}
      className={`text-accent transition-transform hover:translate-x-3 ${className}`}
      replace={replace}
      {...prop}
    >
      {children}
    </RouterLink>
  )
}

export default Link
