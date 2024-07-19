// index.js pada page reducers
import { combineReducers } from '@reduxjs/toolkit'
import dataCount from './dataCount'
import { dataContainer, DataContainerInitialState } from './dataContainer'

export interface RootState {
  dataContainer: DataContainerInitialState
}

export const rootReducer = combineReducers({
  dataCount,
  dataContainer,
})
