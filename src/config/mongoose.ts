import { connect, set } from 'mongoose'
import { validateEnv } from './env.config'

const MONGO_DB_URI = validateEnv()?.MONGO_DB_URI

export const connectToMongo = async () => {
  try {
    set('strictQuery', false)
    const db = await connect(MONGO_DB_URI as string)
    console.log('MongoDB connected to: ', db.connection.name)
  } catch (error) {
    console.error(error)
  }
}