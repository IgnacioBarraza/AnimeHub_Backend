import { object, date, string, number, TypeOf } from 'zod'

export const createUserActivitySchema = object({
  body: object({
    userId: string({ required_error: 'User ID is required' }),
    action: string({ required_error: 'Action is required' }),
    mangadexId: string().optional(),
    aniListId: number().optional(),
    itemType: string({ required_error: 'Item type is required' }).refine((val) => val === 'anime' || val === 'manga', {
      message: 'Item type must be either "anime" or "manga"'
    }),
    createdAt: date({ required_error: 'Created at time is required' }).default(() => new Date())
  })
})

export type CreateUserActivityInput = TypeOf<typeof createUserActivitySchema>['body']