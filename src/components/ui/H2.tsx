interface Props extends React.InputHTMLAttributes<HTMLHeadingElement> {}

const H2: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <h2
      className={`md:text-h2 font-jost mb-2 text-[24px] font-bold sm:text-[40px] ${className}`}
      {...props}
    >
      {children}
    </h2>
  )
}

export default H2
