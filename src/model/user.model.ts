import { Schema, model } from 'mongoose'
import { IUser } from '../interface/user.interface'

const userSchema = new Schema<IUser>({
  password: {
    type: String,
    minlength: [12, 'Password should have at least 12 characters'],
    required: [true, 'Password is required'],
    select: false,
  },
  nickname: {
    type: String,
    required: [true, 'Nickname is required'],
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    validate: {
      validator: function (v: string) {
        return /\S+@\S+\.\S+/.test(v)
      },
      message: (props) => `${props.value} is not a valid email address!`,
    },
  },
  favoritesGenres: {
    type: [String],
    default: [],
  },
  profilePicture: {
    type: String,
    default: '',
  },
  bio: {
    type: String,
    maxlength: [300, 'Bio should have less than 300 characters'],
  },
  lastLogin: { type: Date, default: Date.now },
  verificationToken: { type: String },
  resetPasswordToken: { type: String },
  resetPasswordExpires: { type: Date },
  settings: {
    theme: {
      type: String,
      enum: ['light', 'dark'],
      default: 'light',
    },
    notificationsEnabled: { type: Boolean, default: true },
  },
}, { timestamps: true })

export default model<IUser>('User', userSchema)