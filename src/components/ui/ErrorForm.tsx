import { FieldErrors, FieldValues } from 'react-hook-form'

interface Props<T extends FieldValues> {
  errors: FieldErrors<T>
  className?: string
}

const ErrorForm = <T extends FieldValues>(props: Props<T>) => {
  const { className = '', errors } = props

  return (
    <div
      className={`flex flex-col gap-1 self-start text-[15px] text-red-400 ${className}`}
    >
      {Object.entries(errors)
        .filter(([_, value]) => value?.message)
        .map(([key, value]) => (
          <span key={key}>
            {typeof value?.message === 'string'
              ? value.message
              : 'This field is required.'}
            *
          </span>
        ))}
    </div>
  )
}

export default ErrorForm
