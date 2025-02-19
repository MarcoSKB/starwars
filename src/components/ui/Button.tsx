import React from 'react'

interface Props extends React.InputHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, Props>(
  (
    { isLoading = false, type = 'button', children, className, ...props },
    ref,
  ) => {
    return (
      <button
        className={`text-primary border-primary active:border-accent disabled:active:border-primary flex w-full items-center justify-center gap-2 border-2 border-solid px-3 py-1 font-semibold transition-all hover:cursor-pointer hover:opacity-80 active:translate-y-1 disabled:cursor-default disabled:opacity-50 disabled:active:translate-y-0 disabled:active:translate-none sm:gap-3 sm:px-4 sm:py-2 ${className}`}
        disabled={isLoading}
        ref={ref}
        {...props}
      >
        {isLoading && (
          <img
            className='h-6 w-6 animate-spin'
            src='./images/tube-spinner.svg'
            alt='Spinner icon'
          />
        )}
        {children}
      </button>
    )
  },
)

export default Button
