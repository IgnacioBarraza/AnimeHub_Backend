import { Schema, model } from 'mongoose'
import { IFavorites } from '../interface/favorites'


const FavoriteSchema = new Schema<IFavorites>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  mangadexId: { type: String },
  aniListId: { type: Number },
  itemType: {
    type: String,
    enum: ['anime', 'manga'],
    required: true
  },
  addedAt: {
    type: Date,
    default: Date.now
  }
})

export default model<IFavorites>('Favorite', FavoriteSchema)