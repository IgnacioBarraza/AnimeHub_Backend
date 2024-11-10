import { Document, Schema } from 'mongoose'

export interface IUserSettings extends Document {
  userId: Schema.Types.ObjectId
  theme: 'light' | 'dark'
  notificationsEnabled: boolean
  language: string
}
