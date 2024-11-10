import { Schema, Document } from 'mongoose'

export interface IUserActivity extends Document {
  userId: Schema.Types.ObjectId
  action: string
  mangadexId?: string
  aniListId?: number
  itemType: 'anime' | 'manga'
  createdAt: Date
}