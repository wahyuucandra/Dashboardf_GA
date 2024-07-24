export interface APIBaseResponse<T = undefined> {
  reqId: string
  status: boolean | number | string
  message: string
  error: string | null
  data?: T extends undefined ? never : T
}
