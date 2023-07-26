import { defer } from '@defer/client'

async function oops() {
  throw new Error('I fail!')
}

// the function must be wrapped with `defer()` and exported as default
export default defer(oops)
