import React from 'react'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={`focus-visible:outline-accent bg-white px-4 py-2 text-black outline-2 outline-double ${className}`}
        ref={ref}
        {...props}
      />
    )
  },
)

export default Input
