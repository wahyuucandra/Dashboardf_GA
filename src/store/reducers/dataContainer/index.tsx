export interface DataContainerInitialState {
  isShow: boolean
}

const initialState: DataContainerInitialState = {
  isShow: true,
}

export const dataContainer = (state: DataContainerInitialState = initialState, action: any) => {
  switch (action.type) {
    case '@APP/SHOW_NAVBAR':
      return {
        ...state,
        isShow: action.payload,
      }
  }
  return state
}
