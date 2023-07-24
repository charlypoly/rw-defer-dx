import type { APIGatewayEvent, Context } from 'aws-lambda'

import timeout from 'src/jobs/defer/timeout'
import { logger } from 'src/lib/logger'

export const handler = async (event: APIGatewayEvent, _context: Context) => {
  logger.info(`${event.httpMethod} ${event.path}: runTimeout function`)

  await timeout()

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ok: true,
    }),
  }
}
