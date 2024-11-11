import { object, date, string, TypeOf } from 'zod'

export const createSessionSchema = object({
  body: object({
    userId: string({ required_error: 'User ID is required' }),
    refreshToken: string({ required_error: 'Refresh token is required' }),
    createdAt: date({ required_error: 'Created at date is required' }),
    expiresAt: date({ required_error: 'Expires at time is required'})
  })
})

export type CreateSessionInput = TypeOf<typeof createSessionSchema>['body']