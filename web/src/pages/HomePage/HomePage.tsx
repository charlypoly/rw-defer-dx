import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <div className="p-12">
      <MetaTags title="Home" description="Home page" />

      <h1 className="mb-6 text-2xl">Defer + RedwoodJS Example</h1>
      <div className="flex space-x-4">
        <div>
          <button
            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            onClick={async () => {
              const response = await fetch(
                `${globalThis.RWJS_API_URL}/runHelloWorld?name=dt`
              )

              alert((await response.json()).data)
            }}
          >
            Hello!
          </button>
        </div>
        <div>
          <button
            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            onClick={async () => {
              const response = await fetch(
                `${globalThis.RWJS_API_URL}/runDelayedTime`
              )

              alert((await response.json()).data)
            }}
          >
            Run Delayed Job
          </button>
        </div>
        <div>
          <button
            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            onClick={async () => {
              const response = await fetch(
                `${globalThis.RWJS_API_URL}/sendMail`
              )

              alert((await response.json()).data)
            }}
          >
            Send email
          </button>
        </div>
        <div>
          <button
            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            onClick={async () => {
              const response = await fetch(
                `${globalThis.RWJS_API_URL}/characters`
              )

              alert((await response.json()).data)
            }}
          >
            Defer the Characters Service
          </button>
        </div>
        <div>
          <button
            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            onClick={async () => {
              const response = await fetch(
                `${globalThis.RWJS_API_URL}/runTimeout`
              )

              alert((await response.json()).data)
            }}
          >
            Timeout
          </button>
        </div>
        <div>
          <button
            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            onClick={async () => {
              const response = await fetch(`${globalThis.RWJS_API_URL}/runOops`)

              alert((await response.json()).data)
            }}
          >
            Error
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomePage
