import { Schema, model } from 'mongoose'
import { INotification } from '../interface/notification'


const NotificationSchema = new Schema<INotification>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  message: {
    type: String,
    required: [true, 'Message is required']
  },
  isRead: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

export default model<INotification>('Notification', NotificationSchema)