import { object, string, boolean, TypeOf } from 'zod'

export const createUserSettingsSchema = object({
  body: object({
    userId: string({ required_error: 'User ID is required' }),
    theme: string().refine((val) => val === 'light' || val === 'dark', {
      message: 'Theme must be either "light" or "dark"'
    }).default('dark'),
    notificationEnabled: boolean().default(false),
    language: string().default('en')
  })
})

export type CreateUserSettingsInput = TypeOf<typeof createUserSettingsSchema>['body']