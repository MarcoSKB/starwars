interface Props {
  title: string
  onClick: () => void
}

const Button: React.FC<Props> = (props) => {
  const { title, onClick } = props

  return (
    <button
      type='button'
      className='text-primary text-md border-primary flex items-center justify-center border-2 border-solid px-6 py-4 leading-2 font-semibold transition-all hover:opacity-80 active:translate-y-1'
      onClick={() => onClick()}
    >
      <svg className='mr-3 size-5 animate-spin' viewBox='0 0 24 24' />
      {title}
    </button>
  )
}

export default Button
