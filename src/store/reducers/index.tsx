// index.js pada page reducers
import dataCount from './dataCount'
import { combineReducers } from '@reduxjs/toolkit'
import { dataContainer, DataContainerInitialState } from './dataContainer'

export interface RootState {
  dataContainer: DataContainerInitialState
}

export const rootReducer = combineReducers({
  dataCount,
  dataContainer,
})
