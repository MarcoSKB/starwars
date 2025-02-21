interface Props {
  className?: string
  children: React.ReactNode
}

const Card: React.FC<Props> = ({ className, children }) => {
  return (
    <div
      className={`border-accent before:border-primary relative box-border flex h-full w-full flex-col border-2 border-solid bg-[#121212] px-4 py-4 before:absolute before:top-[-15px] before:left-[-15px] before:z-[-1] before:h-full before:w-full before:border-2 before:border-solid before:content-[""] ${className}`}
    >
      {children}
    </div>
  )
}

export default Card
