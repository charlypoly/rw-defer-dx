import { defer } from '@defer/client'
import { Spaceship } from '@prisma/client'
import { formatRFC7231 } from 'date-fns'

import { logger } from 'src/lib/logger'
import { spaceships } from 'src/services/spaceships/spaceships'

const kesselRun = async () => {
  const now = formatRFC7231(new Date())
  logger.info(`It's now ${now}!`)

  const ships = await spaceships()

  logger.info(`There are ${ships.length} spaceships`)

  ships.forEach((ship: Spaceship) => {
    logger.info(
      `The ${ship.name} will do the Kessel Run in ${ship.appearsIn.join(', ')}'`
    )
  })

  return ships
}

// At every 15th minute past every hour from 10 through 23 on every day-of-week from Monday through Friday.
// UTC: 0 */15 10-23 * * 1-5
export default defer.cron(kesselRun, '*/15 10-23 * * 1-5')
