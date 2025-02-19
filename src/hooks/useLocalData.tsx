import { EntityType, SwapiEntities } from '@utils/types'
import { useAppDispatch, useAppSelector } from '@utils/store'
import { addEntity, updateEntity } from '@features/swapi/swapiSlice'

type UpsertFunctionType<T extends EntityType> = (
  payload: SwapiEntities[T],
) => void

type useLocalDataType = <T extends EntityType>(
  remoteData: SwapiEntities[T],
  entityType: T,
) => [data: SwapiEntities[T], upsertEntity: UpsertFunctionType<T>]

const useLocalData: useLocalDataType = (remoteData, entityType) => {
  const dispatch = useAppDispatch()
  const entityList = useAppSelector((state) => state.swapi[entityType])
  const localData = entityList.find((entity) => entity.id == remoteData?.id)
  const entity = localData || remoteData

  const upsertEntity: UpsertFunctionType<typeof entityType> = (entityValue) => {
    const payload = {
      data: entityValue,
      entityType,
    }
    dispatch(localData ? updateEntity(payload) : addEntity(payload))
  }

  return [entity, upsertEntity]
}

export default useLocalData
