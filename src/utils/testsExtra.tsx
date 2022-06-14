// import { render } from "@testing-library/react"
import { QueryClient, QueryClientProvider, setLogger } from "react-query"
import { render } from "testUtils"



const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        cacheTime: Infinity,
      },
    },
  })

setLogger({
  log: console.log,
  warn: console.warn,
  // ✅ no more errors on the console
  error: () => {},
})

export function renderWithClient(ui: React.ReactElement) {
  const testQueryClient = createTestQueryClient()
  const { rerender, ...result } = render(
    <QueryClientProvider client={testQueryClient}>{ui}</QueryClientProvider>
  )
  return {
    ...result,
    rerender: (rerenderUi: React.ReactElement) =>
      rerender(<QueryClientProvider client={testQueryClient}>{rerenderUi}</QueryClientProvider>),
  }
}

export function createWrapper() {
  const testQueryClient = createTestQueryClient()

  const Provider = ({ children }: { children: React.ReactNode }) => {
    return <QueryClientProvider client={testQueryClient}>{children}</QueryClientProvider>
  }
  return Provider
}
