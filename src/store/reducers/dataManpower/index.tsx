import { ISubmitManpowerResponse } from '@interfaces/manpower'

export interface DataManpowerInitialState {
  submitResponse: ISubmitManpowerResponse | undefined
}

const initialState: DataManpowerInitialState = {
  submitResponse: undefined,
}

export const dataManpower = (state: DataManpowerInitialState = initialState, action: any) => {
  switch (action.type) {
    case '@APP/SET_MANPOWER_SUBMIT_RESPONSE':
      return {
        ...state,
        submitResponse: action.payload,
      }
    case '@APP/DELETE_MANPOWER_SUBMIT_RESPONSE':
      return {
        ...state,
        submitResponse: undefined,
      }
  }
  return state
}
