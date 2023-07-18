export interface IGetRegionListRes {
  name: string
  extName: string
  level: number
  id: number
  extId: number
  pid: number
  children?: IGetRegionListRes[] | null
}
export interface ICommonPageReq {
  page: number
  size: number
}
export interface IAmapLocation {
  addressInfo: IAddressInfo
  formattedAddress: string
}

export interface IAddressInfo {
  province: string
  city: string
  cityCode: string
  district: string
  adCode: string
  township: string
  townCode: string
  street: string
  streetNumber: string
}
