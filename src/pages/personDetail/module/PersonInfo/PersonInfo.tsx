import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { personEditSchema } from '@/utils/validation'
import { SwapiPerson } from '@/utils/types'
import useLocalData from '@/hooks/useLocalData'
import { Button, ErrorForm, Input, Subtitle } from '@/components/ui'

const inputListData: {
  title: string
  inputName: keyof InputForm
}[] = [
  {
    title: 'Gender:',
    inputName: 'gender',
  },
  {
    title: 'Birth year:',
    inputName: 'birth_year',
  },
  {
    title: 'Hair color:',
    inputName: 'hair_color',
  },
  {
    title: 'Height:',
    inputName: 'height',
  },
  {
    title: 'Mass:',
    inputName: 'mass',
  },
]

interface InputForm
  extends Pick<
    SwapiPerson,
    'gender' | 'birth_year' | 'hair_color' | 'height' | 'mass'
  > {}

interface Props {
  id: number
  data: SwapiPerson
}

const PersonInfo: React.FC<Props> = ({ id, data }) => {
  const [isEditable, setIsEditable] = useState(false)
  const [planetData, upsertData] = useLocalData({ id, ...data }, 'people')
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors, isValid },
  } = useForm<InputForm>({
    defaultValues: planetData,
    resolver: yupResolver(personEditSchema),
  })

  const onChangeInfo: SubmitHandler<InputForm> = (formData) => {
    if (isValid) {
      setIsEditable(!isEditable)
    }
    if (isEditable && isValid) {
      upsertData({
        id,
        name: data.name,
        homeworld: data.homeworld,
        ...formData,
      })
    }
  }

  const onCancelEdit = () => {
    resetField('gender'),
      resetField('birth_year'),
      resetField('hair_color'),
      resetField('height'),
      resetField('mass')
    setIsEditable(false)
  }

  return (
    <form
      className='mb-6 flex flex-col gap-3 md:mb-12 md:flex-row md:gap-5'
      onSubmit={handleSubmit(onChangeInfo)}
    >
      <Subtitle className='font-jost flex flex-col gap-3'>
        {inputListData.map((inputData) => (
          <label
            key={inputData.inputName}
            className='flex flex-col justify-between gap-2 pr-[20px] sm:items-center md:flex-row md:pr-0'
          >
            <b>{inputData.title}</b>
            <Input
              className='md:max-w-1/2'
              disabled={!isEditable}
              {...register(inputData.inputName)}
            />
          </label>
        ))}
      </Subtitle>
      <ErrorForm className='md:mr-auto' errors={errors} />
      <div className='flex w-full max-w-1/2 flex-col gap-2 self-end md:max-w-[200px]'>
        <Button type='submit'>{isEditable ? 'Save info' : 'Edit info'}</Button>
        {isEditable && <Button onClick={() => onCancelEdit()}>Cancel</Button>}
      </div>
    </form>
  )
}

export default PersonInfo
