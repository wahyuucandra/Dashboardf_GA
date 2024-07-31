export interface IPagination {
  totalRecords: number
  currentPage: number
  totalPage: number
  nextPage: number | null
  prevPage: number | null
}

export interface IPaginationParam {
  page: number
  size: number
}

export interface APIBaseResponse<T = undefined> {
  reqId: string
  status: boolean | number | string
  message: string
  error: string | null
  data?: T extends undefined ? never : T
  pagination?: IPagination | undefined
}
