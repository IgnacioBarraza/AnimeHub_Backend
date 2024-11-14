import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import UnAuthenticatedError from '../error/unAuthenticated.error'
import ForbiddenError from '../error/forbidden.error'
import { ErrorCode } from '../error/custom.error'
import { validateEnv } from '../config/env.config'
import { findUserById } from '../services/user.service'
import NotFoundError from '../error/notFound.error'
import { extractTokenFromHeader } from '../utils/util'

export interface UserDataType {
  userId: string
}

export interface IUserMessage<TParams = any, TQuery = any, TBdoy = any> extends Request<TParams, TQuery, TBdoy> {
  userData: UserDataType
}

export const AuthJWT = (
  req: IUserMessage,
  res: Response,
  next: NextFunction
) => {
  try {
    const jwtConfig = validateEnv()?.jwtConfig
    if (!jwtConfig) throw new Error('JWT config is missing in env variables')
    const token = extractTokenFromHeader(req)

    if (!token) throw new UnAuthenticatedError('Provide token', ErrorCode.TOKEN_NOT_FOUND)

    jwt.verify(token, jwtConfig.accessSecret, async (err, decoded) => {
      if (err) return next(new ForbiddenError('Token expired', ErrorCode.TOKEN_EXPIRE))
      
      const decodedData = decoded as UserDataType

      const user = await findUserById(decodedData.userId)

      if (!user) throw new NotFoundError('User not found', ErrorCode.NOT_FOUND)

      req.userData = {
        userId: decodedData.userId,
      }
      next()
    })

  } catch (error) {
    console.error(error)
    throw new UnAuthenticatedError('Provide token', ErrorCode.TOKEN_NOT_FOUND)
  }
}