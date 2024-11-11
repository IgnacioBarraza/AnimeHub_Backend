import { object, date, string, number, TypeOf } from 'zod'

export const createFavoritesSchema = object({
  body: object({
    userId: string({ required_error: 'User ID is required' }),
    mangadexId: string().optional(),
    aniListId: number().optional(),
    itemType: string({ required_error: 'Item Type is required' }).refine((val) => val === 'anime' || val === 'manga', {
      message: 'Item type must be either "anime" or "manga"'
    }),
    addedAt: date().default(() => new Date()).optional()
  })
})

export type CreateFavoriteInput = TypeOf<typeof createFavoritesSchema>['body']