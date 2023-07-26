import { defer } from '@defer/client'
import { formatRFC7231 } from 'date-fns'

import { logger } from 'src/lib/logger'
import { resend } from 'src/mailer'

import { Email } from '../../mailer/templates/react/email'

const sendEmail = async () => {
  const now = formatRFC7231(new Date())
  const message = `It's now ${now}! And am going to send an email.`
  logger.info(message)

  try {
    const data = await resend.sendEmail({
      from: 'Acme <onboarding@resend.dev>',
      to: [process.env.SEND_TO_EMAIL],
      subject: 'Hello World',
      react: Email(message),
    })

    logger.debug(data, 'Sent email')
  } catch (error) {
    logger.error(error, 'Failed to send email')
  }
}

export default defer(sendEmail)
