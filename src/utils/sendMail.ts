import nodemailer from 'nodemailer'
import ejs from 'ejs'
import { validateEnv } from '../config/env.config'

interface MailOptions {
  email: string
  subject: string
  template: string
  data: Record<string, any>
}

export const sendMail = async (options: MailOptions): Promise<void> => {
  try {
    const transporter = nodemailer.createTransport({
      host: validateEnv()?.smtp.host,
      port: Number(validateEnv()?.smtp.port),
      service: validateEnv()?.smtp.service,
      secure: true,
      auth: {
        user: validateEnv()?.smtp.mail,
        pass: validateEnv()?.smtp.password
      }
    })

    await transporter.verify()

    const { email, subject, template, data } = options
    const paths = `./src/mails/${template}`
    console.log(paths)

    const html = await ejs.renderFile(paths, data)
    const mailOption = {
      from: validateEnv()?.smtp.mail,
      to: email,
      subject,
      html
    }

    const info = await transporter.sendMail(mailOption)
    console.log('Email sent: ', info.response)
  } catch (error) {
    console.error('Error sending email: ', error)
  }
}