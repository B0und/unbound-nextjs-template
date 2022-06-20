import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

interface Props {
  children: React.ReactNode;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // one minute
      staleTime: 60 * 1000,
      retry: process.env.NODE_ENV === "production",
      refetchOnWindowFocus: process.env.NODE_ENV === "production",
    },
  },
});

export const AllProviders = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      {children}
    </QueryClientProvider>
  );
};
