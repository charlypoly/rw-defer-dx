import type { APIGatewayEvent, Context } from 'aws-lambda'

import oops from 'src/jobs/defer/oops'
import { logger } from 'src/lib/logger'

export const handler = async (event: APIGatewayEvent, _context: Context) => {
  logger.info(`${event.httpMethod} ${event.path}: runOops function`)

  await oops()

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
