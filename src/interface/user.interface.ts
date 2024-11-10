import { Document } from 'mongoose'

export interface IUser extends Document {
  password: string
  email: string
  nickname: string
  favoritesGenres: []
  languagePrefenreces: string
  profilePicture: string
  bio?: string
  lastLogin: Date
  verificationToken?: string
  resetPasswordToken?: string
  resetPasswordExpires?: Date
  settings: {
    theme: 'light' | 'dark'
    notificationsEnabled: boolean
  }
  createdAt: Date
  updatedAt: Date
}