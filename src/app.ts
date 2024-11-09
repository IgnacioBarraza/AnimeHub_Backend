import { config } from 'dotenv'
import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'

/** Middlewares imports **/
import { notFound, errorHandler } from './middleware/index.middleware'

/** APIs imports **/
import api from './api/index.api'

config()

const app = express()

app.use(morgan("dev"))
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }))
app.use(cookieParser())

/** APIs **/
app.use('/api/',api)

/** Middlewares **/
app.use(notFound)
app.use(errorHandler)




export default app
