import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { SwapiFilm } from '@/utils/types'
import { filmEditSchema } from '@utils/validation'
import useLocalData from '@/hooks/useLocalData'
import { Button, ErrorForm, Input } from '@/components/ui'

const inputListData: {
  title: string
  inputName: keyof InputForm
}[] = [
  {
    title: 'Director:',
    inputName: 'director',
  },
  {
    title: 'Producer:',
    inputName: 'producer',
  },
  {
    title: 'Realese date:',
    inputName: 'release_date',
  },
]

interface InputForm {
  director: string
  producer: string
  release_date: string
}

interface Props {
  id: number
  data: SwapiFilm
}

const FilmInfo: React.FC<Props> = ({ id, data }) => {
  const [isEditable, setIsEditable] = useState(false)
  const [filmData, upsertFilm] = useLocalData({ id, ...data }, 'films')
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors, isValid },
  } = useForm<InputForm>({
    defaultValues: filmData,
    resolver: yupResolver(filmEditSchema),
  })

  const onChangeInfo: SubmitHandler<InputForm> = (formData) => {
    if (isValid) {
      setIsEditable(!isEditable)
    }
    if (isEditable && isValid) {
      upsertFilm({
        id,
        title: data.title,
        ...formData,
      })
    }
  }

  const onCancelEdit = () => {
    resetField('director'), resetField('producer'), resetField('release_date')
    setIsEditable(false)
  }

  return (
    <form
      className='mb-6 flex flex-col gap-3 md:gap-5'
      onSubmit={handleSubmit(onChangeInfo)}
    >
      <div className='font-jost flex flex-col gap-3'>
        {inputListData.map((inputData) => (
          <label
            key={inputData.inputName}
            className='md:text-md flex flex-col justify-between gap-2 text-base md:flex-row md:items-center md:pr-0'
          >
            <b>{inputData.title}</b>
            <Input
              className='md:max-w-1/2'
              disabled={!isEditable}
              {...register(inputData.inputName)}
            />
          </label>
        ))}
      </div>
      <ErrorForm className='md:mr-auto' errors={errors} />
      <Button type='submit' className='max-w-1/2 self-end md:max-w-[200px]'>
        {isEditable ? 'Save info' : 'Edit info'}
      </Button>
      {isEditable && (
        <Button
          onClick={() => onCancelEdit()}
          className='max-w-1/2 self-end md:max-w-[200px]'
        >
          Cancel
        </Button>
      )}
    </form>
  )
}

export default FilmInfo
