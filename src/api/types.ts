export interface IFileItem {
  id: number
  fileUrl: string
  fileName: string
  fileSize: number
  fileType: number
  fileTypeName: string
  userId: number
}

export interface IResult<T> {
  code: number
  message: string
  data: T
}

export interface IResultPage<T> {
  content: T[]
  page: number
  size: number
  total: number
}
