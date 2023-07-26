import { defer } from '@defer/client'

import { logger } from 'src/lib/logger'

async function timeout() {
  return new Promise((resolve) => {
    setTimeout(() => {
      logger.info(`I should not be logged!`)
      resolve('done')
    }, 5000)
  })
}

// the function must be wrapped with `defer()` and exported as default
export default defer(timeout, { maxDuration: 2 })
