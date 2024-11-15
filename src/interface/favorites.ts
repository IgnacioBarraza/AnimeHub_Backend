import { Document, Schema } from 'mongoose'

export interface IFavorites extends Document {
  userId: Schema.Types.ObjectId
  mangadexId?: string
  aniListId?: number
  itemType: 'anime' | 'manga'
  title: string
  coverImage: string
  addedAt: Date
}