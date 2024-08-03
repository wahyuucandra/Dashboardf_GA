import { APIBaseResponse } from '@interfaces/api'
import {
  IAssetBookingTime,
  IListAsset,
  IListAssetBrand,
  IListAssetBrandParams,
  IListAssetParams,
  ISubmitBookingAssetPayload,
} from '@interfaces/asset'
import { API_MASTER } from '@utils/environment'
import httpRequest from '@utils/helper'

const api = httpRequest(API_MASTER)

export function apiGetListAsset(params: IListAssetParams): Promise<APIBaseResponse<IListAsset[]>> {
  return api.get<IListAsset[], APIBaseResponse<IListAsset[]>>('/asset/list', { params })
}

export function apiGetListAssetBrand(params: IListAssetBrandParams): Promise<APIBaseResponse<IListAssetBrand[]>> {
  return api.get<IListAssetBrand[], APIBaseResponse<IListAssetBrand[]>>('/asset/brand/list', { params })
}

export function apiGetAssetBookingTime(): Promise<APIBaseResponse<IAssetBookingTime[]>> {
  return api.get<IAssetBookingTime[], APIBaseResponse<IAssetBookingTime[]>>('/asset/bookingTime')
}

export function apiSubmitBooking(payload: ISubmitBookingAssetPayload): Promise<APIBaseResponse> {
  return api.post<undefined, APIBaseResponse>('/asset/bookingTime', payload)
}
