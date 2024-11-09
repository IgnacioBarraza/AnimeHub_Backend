import CustomApiError, { ErrorCode } from './custom.error'

class NotFoundError extends CustomApiError {
  statusCode: number
  constructor(message: string, errorCode: ErrorCode) {
    super(message, errorCode, 404, null)
    this.statusCode = 404
  }
}

export default NotFoundError