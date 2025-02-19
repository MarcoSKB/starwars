import React from 'react'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', disabled, ...props }, ref) => {
    if (disabled) {
      return (
        <input
          type={type}
          className={`text-lightGray outline-darkGray w-full px-4 py-2 outline-2 ${className}`}
          ref={ref}
          disabled
          {...props}
        />
      )
    }

    return (
      <input
        type={type}
        className={`focus-visible:outline-accent w-full bg-white px-4 py-2 text-black outline-2 outline-double ${className}`}
        ref={ref}
        {...props}
      />
    )
  },
)

export default Input
