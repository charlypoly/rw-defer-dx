import { defer } from '@defer/client'
import { formatRFC7231 } from 'date-fns'

import { logger } from 'src/lib/logger'

const time = async () => {
  const now = formatRFC7231(new Date())
  logger.info(`It's now ${now}!`)
}

// At every 10th minute past every hour from 10 through 23 on every day-of-week from Monday through Friday.
// UTC: 0 */10 10-23 * * 1-5
export default defer.cron(time, '*/10 10-23 * * 1-5')
