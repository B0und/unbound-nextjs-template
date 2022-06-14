import "../styles/globals.css"
import type { AppProps } from "next/app"
import { ReactQueryDevtools } from "react-query/devtools"
import { AllProviders } from "../utils/providers"

export const isDevEnv = process.env.NODE_ENV === "development"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AllProviders>
      <Component {...pageProps} />
      {isDevEnv && <ReactQueryDevtools initialIsOpen={false} />}
    </AllProviders>
  )
}

export default MyApp
