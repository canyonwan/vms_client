export interface IAddConsigneeReq {
  id?: number
  region: string
  name: string
  phone: string
  provinceName: string
  cityName: string
  districtName?: string
  townName?: string
  detailAddress: string
  isDefault: number | boolean
}

export interface IConsigneeItem {
  id: number
  userId: number
  isDefault: number
  name: string
  phone: string
  provinceName: string
  cityName: string
  districtName: string
  townName: string
  detailAddress: string
  createdAt: string
  updatedAt: string
}

export interface ISetDefaultConsigneeReq {
  id: number
  isDefault: number
}
