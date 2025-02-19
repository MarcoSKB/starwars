import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { EntityPayload, EntityType, SwapiState } from '@utils/types'

const initialState: SwapiState = {
  planets: [],
  films: [],
  people: [],
  vehicle: [],
}

const swapiSlice = createSlice({
  name: 'swapi',
  initialState,
  reducers: {
    addEntity: <T extends EntityType>(
      state: SwapiState,
      { payload }: PayloadAction<EntityPayload<T>>,
    ) => {
      const entityList = state[payload.entityType]

      if (!entityList.some((entity) => entity.id == payload.data.id)) {
        entityList.push(payload.data)
      }
    },
    updateEntity: <T extends EntityType>(
      state: SwapiState,
      { payload }: PayloadAction<EntityPayload<T>>,
    ) => {
      const entityList = state[payload.entityType]

      const index = entityList.findIndex(
        (entity) => entity.id === payload.data.id,
      )
      if (index !== -1) {
        entityList[index] = { ...entityList[index], ...payload.data }
      }
    },
  },
})

export const { addEntity, updateEntity } = swapiSlice.actions
export default swapiSlice.reducer
