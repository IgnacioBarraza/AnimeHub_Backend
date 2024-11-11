import { model, Schema } from "mongoose"
import { IUserSettings } from "../interface/usersetting"

const UserSettingsSchema = new Schema<IUserSettings>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  theme: {
    type: String,
    enum: ['light', 'dark'],
    default: 'dark',
  },
  notificationsEnabled: {
    type: Boolean,
    default: false
  },
  language: {
    type: String,
    default: 'en'
  }
})

export default model<IUserSettings>('UserSettings', UserSettingsSchema)