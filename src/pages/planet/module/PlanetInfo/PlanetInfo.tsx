import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { SwapiPlanet } from '@utils/types'
import { planetEditSchema } from '@utils/validation'
import useLocalData from '@hooks/useLocalData'
import { Button, ErrorForm, Input, Subtitle } from '@components/ui'

const inputListData: {
  title: string
  inputName: keyof InputForm
}[] = [
  {
    title: 'Terrain:',
    inputName: 'terrain',
  },
  {
    title: 'Climate:',
    inputName: 'climate',
  },
  {
    title: 'Rotation period:',
    inputName: 'rotation_period',
  },
  {
    title: 'Population',
    inputName: 'population',
  },
  {
    title: 'Diameter',
    inputName: 'diameter',
  },
]

interface Props {
  id: number
  data: SwapiPlanet
}

interface InputForm {
  terrain: string
  climate: string
  rotation_period: number
  population: number
  diameter: number
}

const PlanetInfo: React.FC<Props> = ({ id, data }) => {
  const [isEditable, setIsEditable] = useState(false)
  const [planetData, upsertData] = useLocalData({ id, ...data }, 'planets')
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<InputForm>({
    defaultValues: planetData,
    resolver: yupResolver(planetEditSchema),
  })

  const onChangeInfo: SubmitHandler<InputForm> = (formData) => {
    if (isValid) {
      setIsEditable(!isEditable)
    }
    if (isEditable && isValid) {
      upsertData({ id, name: data.name, ...formData })
    }
  }

  return (
    <form
      className='mb-4 flex flex-col gap-3 md:mb-6 md:flex-row md:gap-5'
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
      <Button type='submit' className='max-w-1/2 self-end md:max-w-[200px]'>
        {isEditable ? 'Save info' : 'Edit info'}
      </Button>
    </form>
  )
}

export default PlanetInfo
