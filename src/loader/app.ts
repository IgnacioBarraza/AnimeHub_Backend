import { config } from 'dotenv'
import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import ExpressMongoSanitize from 'express-mongo-sanitize'

/** Middlewares imports **/
import { notFound, errorHandler } from '../middleware/index.middleware'

/** APIs imports **/
import api from '../api/index.api'
import { corsOptions } from '../config/corsOptions'
import { successHandler } from '../config/morgan'

config()

export const bootstrapExpress = (app: any) => {
  app.use(successHandler)
  app.use(errorHandler)
  app.use(morgan('dev'))
  app.use(cors())
  app.use(cors(corsOptions))
  app.use(express.json())
  app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }))
  app.use(cookieParser())
  app.use(ExpressMongoSanitize())
  app.use(helmet())
  app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }))
  app.use(helmet.xssFilter())
  app.use(
    helmet.contentSecurityPolicy({
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'trusted-cdn.com'"],
        objectSrc: ["'none'"],
        upgradeInsecureRequests: [],
      },
    })
  )

  /** APIs **/
  app.use('/api/', api)

  /** Middlewares **/
  app.use(notFound)
  app.use(errorHandler)
}
