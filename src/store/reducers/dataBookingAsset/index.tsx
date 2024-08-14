export interface DataBookingAssetInitialState {
  bookingLocation: string
}

const initialState: DataBookingAssetInitialState = {
  bookingLocation: '',
}

const initialStateDummy: DataBookingAssetInitialState = {
  bookingLocation: 'ACC',
}

export const dataBookingAsset = (state: DataBookingAssetInitialState = initialStateDummy, action: any) => {
  switch (action.type) {
    case '@APP/SET_BOOKING_LOCATION':
      return {
        ...state,
        bookingLocation: action.payload,
      }
    case '@APP/DELETE_BOOKING_LOCATION':
      return {
        ...state,
        bookingLocation: '',
      }
  }
  return state
}
