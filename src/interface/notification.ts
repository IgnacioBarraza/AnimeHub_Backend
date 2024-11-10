import { Schema, Document } from 'mongoose'


export interface INotification extends Document {
  userId: Schema.Types.ObjectId
  message: string
  isRead: boolean
  createdAt: Date
}