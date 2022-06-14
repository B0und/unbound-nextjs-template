import React from "react"
import { QueryClient, QueryClientProvider } from "react-query"

interface Props {
  children: React.ReactNode
}
export const AllProviders = ({ children }: Props) => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      {children}
    </QueryClientProvider>
  )
}
