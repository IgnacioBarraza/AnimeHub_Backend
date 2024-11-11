import { object, date, string, boolean, TypeOf } from 'zod'

export const createNotificationSchema = object({
  body: object({
    userId: string({ required_error: 'User ID is required' }),
    message: string({ required_error:'Message is required' }),
    isRead: boolean().default(false),
    createdAt: date().default(() => new Date())
  })
})

export type CreateNotificationInput = TypeOf<typeof createNotificationSchema>['body']