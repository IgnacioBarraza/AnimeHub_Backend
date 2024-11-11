import { Schema, model } from 'mongoose'
import { IUserActivity } from '../interface/useractivity'

const UserActivitySchema = new Schema<IUserActivity>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  action: {
    type: String,
    required: true
  },
  mangadexId: { type: String },
  aniListId: { type: Number },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true
  },
  itemType: {
    type: String,
    enum: ['anime', 'manga'],
    required: true
  }
})

export default model<IUserActivity>('UserActivity', UserActivitySchema)