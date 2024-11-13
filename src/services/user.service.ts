import { FilterQuery, QueryOptions, UpdateQuery } from 'mongoose'
import { IUser } from '../interface/user'
import UserModel from '../model/user.model'
import FavoritesModel from '../model/favorites.model'
import { IFavorites } from '../interface/favorites'
import UserSettingModel from '../model/usersetting.model'
import { IUserSettings } from '../interface/usersetting'
import { IUserActivity } from '../interface/useractivity'
import UserActivityModel from '../model/useractivity.model'
import SessionModel from '../model/session.model'
import NotificationModel from '../model/notification.model'

export async function findAllUsers() {
  return await UserModel.find()
}

export async function findUserById(userId: string) {
  return await UserModel.findById(userId)
}

export async function findUserByEmail(email: string) {
  return await UserModel.findOne({ email: email })
}

export async function findUser(
  query: FilterQuery<IUser>,
  options: QueryOptions = { lean: true }
): Promise<IUser | null> {
  return await UserModel.findOne(query, {}, options)
}

export async function createUser(userData: Partial<IUser>) {
  try {
    const result = await UserModel.create(userData)
    return { data: result, success: true }
  } catch (error) {
    return { date: null, success: false, error }
  }
}

export async function updateUserById(
  userId: string,
  update: UpdateQuery<IUser>,
  options: QueryOptions = { new: true }
) {
  try {
    const result = await UserModel.findByIdAndUpdate(userId, update, options)
    return { data: result, success: true }
  } catch (error) {
    return { data: null, success: false, error }
  }
}

export async function deleteUserById(userId: string) {
  return await UserModel.deleteOne({ _id: userId })
}

export async function getUserFavorites(userId: string) {
  return await FavoritesModel.findOne({ userId })
}

export async function addUserFavorites(userId: string, favoriteData: Partial<IFavorites>) {
  return await FavoritesModel.updateOne(
    { userId },
    { $push: {
      favorites: favoriteData
    }},
    { upsert: true }
  )
}

export async function removeUserFavorite(userId: string, favoriteId: string) {
  return await FavoritesModel.updateOne(
    { userId },
    { $pull: {
      favorites: {
        _id: favoriteId
      }
    }}
  )
}

export async function getUserSettings(userId: string) {
  return await UserSettingModel.findOne({ userId })
}

export async function updateUserSettings(userId: string, settingsData: Partial<IUserSettings>) {
  return await UserSettingModel.updateOne(
    { userId },
    { $set: settingsData },
    { upsert: true }
  )
}

export async function addUserActivity(userId: string, activityData: Partial<IUserActivity>) {
  return await UserActivityModel.create({
    ...activityData,
    userId,
    createdAt: new Date()
  })
}

export async function getUserActivity(userId: string) {
  return await UserActivityModel.findOne({ userId })
}

export async function createSession(userId: string, refreshToken: string, expiresAt: Date) {
  return await SessionModel.create({ userId, refreshToken, expiresAt, createdAt: new Date() })
}

export async function getUserSession(refreshToken: string) {
  return await SessionModel.findOne({ refreshToken })
}

export async function deleteUserSession(refreshToken: string) {
  return await SessionModel.deleteOne({ refreshToken })
}

export async function getUserNotification(userId: string) {
  return await NotificationModel.find({ userId })
}

export async function addNotification(userId: string, message: string) {
  return await NotificationModel.create({
    userId,
    message,
    isRead: false,
    createdAt: new Date()
  })
}

export async function markNotification(notificationId: string) {
  return await NotificationModel.updateOne(
    { _id: notificationId },
    { $set: {
      isRead: true
    }}
  )
}

export async function deleteNotification(notificationId: string) {
  return await NotificationModel.deleteOne({ _id: notificationId })
}