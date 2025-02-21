import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { SwapiVehicle } from '@utils/types'
import { vehicleEditSchema } from '@utils/validation'
import useLocalData from '@hooks/useLocalData'
import { Button, ErrorForm, Input, Subtitle } from '@components/ui'

const inputListData: {
  title: string
  inputName: keyof InputForm
}[] = [
  {
    title: 'Model:',
    inputName: 'model',
  },
  {
    title: 'Vehicle class:',
    inputName: 'vehicle_class',
  },
  {
    title: 'Price:',
    inputName: 'cost_in_credits',
  },
  {
    title: 'Cargo capacity:',
    inputName: 'cargo_capacity',
  },
  {
    title: 'Length:',
    inputName: 'length',
  },
]

interface Props {
  id: number
  data: SwapiVehicle
}

interface InputForm
  extends Pick<
    SwapiVehicle,
    'model' | 'vehicle_class' | 'cost_in_credits' | 'cargo_capacity' | 'length'
  > {}

const VehicleInfo: React.FC<Props> = ({ id, data }) => {
  const [isEditable, setIsEditable] = useState(false)
  const [vehicleData, upsertData] = useLocalData({ id, ...data }, 'vehicle')
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors, isValid },
  } = useForm<InputForm>({
    defaultValues: vehicleData,
    resolver: yupResolver(vehicleEditSchema),
  })

  const onChangeInfo: SubmitHandler<InputForm> = (formData) => {
    if (isValid) {
      setIsEditable(!isEditable)
    }
    if (isEditable && isValid) {
      upsertData({
        id,
        name: data.name,
        crew: data.crew,
        passengers: data.passengers,
        ...formData,
      })
    }
  }

  const onCancelEdit = () => {
    resetField('model'),
      resetField('vehicle_class'),
      resetField('cost_in_credits'),
      resetField('cargo_capacity'),
      resetField('length'),
      setIsEditable(false)
  }

  return (
    <form
      className='mb-4 flex flex-col gap-3 md:mb-10 md:flex-row md:gap-5'
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

export default VehicleInfo
