import { QueryClient } from "@tanstack/react-query";

export function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60_000, //time where data is considered fresh, prevents automatic refetching
      },
    },
  });
}
