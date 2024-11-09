import CustomApiError, { ErrorCode } from './custom.error'

class InternalServerError extends CustomApiError {
  statusCode: number
  constructor(message: string, errorCode: ErrorCode) {
    super(message, errorCode, 500, null)
    this.statusCode = 500
  }
}

export default InternalServerError