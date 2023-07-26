import { defer } from '@defer/client'

import { logger } from 'src/lib/logger'

// a background function must be `async`
const helloWorld = async (name: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      logger.info(`Hello ${name}!`)
      resolve('done')
    }, 5000)
  })
}

// the function must be wrapped with `defer()` and exported as default
export default defer(helloWorld)
