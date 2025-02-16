import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface PlanetSliceType {
  id: string
  name: string
  terrain: string
  climate: string
  population: number
  rotation_period: number
  diameter: number
}

const initialState: PlanetSliceType[] = []

const planetsSlice = createSlice({
  name: 'planets',
  initialState,
  reducers: {
    addPlanet: (state, action: PayloadAction<PlanetSliceType>) => {
      if (!state.some((planet) => planet.id == action.payload.id)) {
        state.push(action.payload)
      }
    },
    updatePlanet: (state, action: PayloadAction<PlanetSliceType>) => {
      state.map((planet) =>
        planet.id === action.payload.id
          ? { ...planet, ...action.payload }
          : planet,
      )
    },
  },
})

export const { addPlanet, updatePlanet } = planetsSlice.actions
export default planetsSlice.reducer
