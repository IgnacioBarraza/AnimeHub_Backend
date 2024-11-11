import { Request, Response, NextFunction } from 'express'
import { AnyZodObject } from 'zod'

const validateSChema = (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
  try {
    schema.parse({
      body: req.body,
      query: req.query,
      params: req.params
    })
    next()
  } catch (err: any) {
    const message = err.errors.map((err:any) => err.message)
    return res.status(400).json({
      message: message.join(','),
      sucess: false
    })
  }
}

export default validateSChema