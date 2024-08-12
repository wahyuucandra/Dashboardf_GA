// index.js pada page reducers
import dataCount from './dataCount'
import { combineReducers } from '@reduxjs/toolkit'
import { dataContainer, DataContainerInitialState } from './dataContainer'
import { dataBookingAsset, DataBookingAssetInitialState } from './dataBookingAsset'
import { dataRoom, DataRoomInitialState } from './dataRoom'
import { dataKaraoke, DataKaraokeInitialState } from './dataKaraoke'

export interface RootState {
  dataContainer: DataContainerInitialState
  dataBookingAsset: DataBookingAssetInitialState
  dataRoom: DataRoomInitialState
  dataKaraoke: DataKaraokeInitialState
}

export const rootReducer = combineReducers({
  dataCount,
  dataContainer,
  dataBookingAsset,
  dataRoom,
  dataKaraoke,
})
