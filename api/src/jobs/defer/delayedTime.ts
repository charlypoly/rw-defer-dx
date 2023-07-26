import { defer } from '@defer/client'
import { formatRFC7231, parseISO } from 'date-fns'

import { logger } from 'src/lib/logger'

async function delayedTime(sentAt: string) {
  const now = formatRFC7231(new Date())
  const received = parseISO(sentAt)
  const receivedAt = formatRFC7231(received || new Date())
  const message = `It's now ${now}! (but, I received this job at ${receivedAt})`

  logger.info(message)

  return message
}

// the function must be wrapped with `defer()` and exported as default
export default defer(delayedTime)
