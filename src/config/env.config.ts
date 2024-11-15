import { ZodError } from 'zod'
import { EnvConfig, envSchema } from '../validation/env.validation'
import { config } from 'dotenv'

config()

export const validateEnv = () => {
  try {
    const envVars: EnvConfig = envSchema.parse(process.env)
    return {
      port: +envVars.PORT,
      env: envVars.NODE_ENV,
      MONGO_DB_URI: envVars.MONGO_DB_URI,
      jwtConfig: {
        accessSecret: envVars.JWT,
        refreshAccessSecret: envVars.JWT_REFRESH
      },
      smtp: {
        host: envVars.SMTP_HOST,
        port: envVars.SMTP_PORT,
        service: envVars.SMTP_SERVICE,
        mail: envVars.SMTP_MAIL,
        password: envVars.SMTP_PASSWORD,
      },
    }
  } catch (error) {
    let message =  undefined
    if (error instanceof ZodError) {
      message = error.errors
      console.error('Validation failed for env:', message)
    } else {
      console.error('Error parsing env variables', error)
    }
  }
}