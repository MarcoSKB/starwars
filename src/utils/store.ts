import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import authReducer from '@features/auth/authSlice'
import swapiSlice from '@/features/swapi/swapiSlice'

const loadGlobalState = () => {
  try {
    const serializedState = localStorage.getItem('globalState')
    return serializedState ? JSON.parse(serializedState) : undefined
  } catch (err) {
    console.error('Error loading state:', err)
    return undefined
  }
}

const saveGlobalState = (state: RootState) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('globalState', serializedState)
  } catch (err) {
    console.error('Error saving state:', err)
  }
}

const reducer = combineReducers({
  auth: authReducer,
  swapi: swapiSlice,
})

export const store = configureStore({
  reducer,
  preloadedState: loadGlobalState(),
})

store.subscribe(() => saveGlobalState(store.getState()))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
