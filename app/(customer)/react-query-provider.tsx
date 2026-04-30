"use client";

import { QueryCache, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

const ReactQueryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [queryClient] = useState(() => new QueryClient({
    queryCache: new QueryCache({
      onError: (error, query) => {
        // Logic for every failed query
        console.log('error queryClient', error, query);
        if ((error as any)?.status === 401) {
          window.location.href = '/login';
        }
      },
      onSuccess(data, query) {
        // console.log('success queryClient', data)
      },
    }),
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  }));



  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default ReactQueryProvider;
