import { bootstrapExpress } from './app'
import { logger } from '../config/logger'
import { validateEnv } from '../config/env.config'
import { connectToMongo } from '../config/mongoose'

export const bootstrap = async (app: any) => {
  validateEnv()
  await connectToMongo()
  bootstrapExpress(app)
  logger.info('Express app initiliazed')
}