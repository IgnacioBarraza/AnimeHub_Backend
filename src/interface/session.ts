import { Document, Schema } from 'mongoose'

export interface ISession extends Document {
  userId: Schema.Types.ObjectId
  refreshToken: string
  createdAt: Date
  expiresAt: Date
}