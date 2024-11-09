import CustomApiError, { ErrorCode } from './custom.error'

class BadRequesrError extends CustomApiError {
  statusCode: number
  constructor(message: string, errorCode: ErrorCode) {
    super(message, errorCode, 400, null)
    this.statusCode = 400
  }
}

export default BadRequesrError