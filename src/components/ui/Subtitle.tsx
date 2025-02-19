interface Props {
  children: React.ReactNode
  className?: string
}

const Subtitle: React.FC<Props> = ({ children, className }) => {
  return (
    <span
      className={`sm:text-md md:text-subtitle before:bg-accent font-jost relative max-w-[746px] pl-5 text-base text-pretty before:absolute before:top-1/2 before:left-0 before:h-[75%] before:w-[3px] before:-translate-y-1/2 before:rounded-2xl before:content-[""] md:pl-9 ${className}`}
    >
      {children}
    </span>
  )
}

export default Subtitle
