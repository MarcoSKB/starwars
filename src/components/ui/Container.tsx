interface Props {
  children: React.ReactNode
}

const Container: React.FC<Props> = ({ children }) => {
  return (
    <div className='mx-auto flex w-full max-w-[1440px] flex-col px-4'>
      {children}
    </div>
  )
}

export default Container
