export function setBookingLocation(location: string) {
  return {
    type: '@APP/SET_BOOKING_LOCATION',
    payload: location,
  }
}

export function deleteBookingLocation() {
  return {
    type: '@APP/DELETE_BOOKING_LOCATION',
    payload: '',
  }
}
