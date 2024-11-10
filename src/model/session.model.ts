import { Schema, model } from 'mongoose'
import { ISession } from '../interface/session'

const SessionSchema = new Schema<ISession>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  refreshToken: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true
  },
  expiresAt: {
    type: Date,
    required: true
  }
})

export default model<ISession>('Session', SessionSchema)