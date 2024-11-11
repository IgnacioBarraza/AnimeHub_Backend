import { object, string, date , TypeOf } from 'zod'

export const createUserSchema = object({
  body: object({
    email: string({ required_error: 'Email is required' }).email('Invalid email format'),
    password: string({ required_error: 'Password is required' }).min(12, ' Password must be at least 12 characters'),
    nickname: string({ required_error: 'Nickname is required' }),
    favoriteGenres: string().optional(),
    profilePicture: string().optional(),
    bio: string().max(300, 'Bio must be less than 300 characters').optional(),
    lastLogin: date().default(() => new Date()).optional(),
    verificationToken: string().optional(),
    resetPasswordToken: string().optional(),
    resetPasswordExpires: date().optional(),
    createdAt: date().default(() => new Date()).optional(),
    updatedAt: date().optional()
  })
})

export type CreateUserInput = TypeOf<typeof createUserSchema>['body']