import CustomApiError, { ErrorCode } from './custom.error'

class ForbiddenError extends CustomApiError {
  statusCode: number
  constructor(message: string, errorCode: ErrorCode) {
    super(message, errorCode, 403, null)
    this.statusCode = 403
  }
}

export default ForbiddenError