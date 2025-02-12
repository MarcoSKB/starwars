interface Props {
  children: React.ReactNode
}

const Container: React.FC<Props> = ({ children }) => {
  return (
    <div className='mx-auto flex w-full max-w-[1440px] flex-col'>
      {children}
    </div>
  )
}

export default Container
