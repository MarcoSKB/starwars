interface Props {
  title: string
  onClick?: () => void
  isLoading?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const Button: React.FC<Props> = (props) => {
  const { title, onClick, isLoading = false, type = 'button' } = props

  return (
    <button
      type={type}
      className='text-primary border-primary active:border-accent flex w-full items-center justify-center gap-2 border-2 border-solid px-3 py-1 text-base font-semibold transition-all hover:cursor-pointer hover:opacity-80 active:translate-y-1 disabled:cursor-default disabled:opacity-50 disabled:active:translate-y-0 sm:gap-3 sm:px-4 sm:py-2'
      disabled={isLoading}
      onClick={onClick}
    >
      {isLoading && (
        <img
          className='h-6 w-6 animate-spin'
          src='./images/tube-spinner.svg'
          alt='Spinner icon'
        />
      )}
      {title}
    </button>
  )
}

export default Button
