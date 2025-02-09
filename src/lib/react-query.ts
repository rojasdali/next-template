import {
  QueryClient,
  DefaultOptions,
  UseMutationOptions,
} from "@tanstack/react-query";

export const queryConfig = {
  queries: {
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 1000 * 60, // 1 minute
  },
} satisfies DefaultOptions;

export const queryClient = new QueryClient({
  defaultOptions: queryConfig,
});

// Type-safe hooks factory
export function createQueryKeys(prefix: string) {
  const keys = {
    all: [prefix] as const,
    lists: () => [...keys.all, "list"] as const,
    list: (params: unknown) => [...keys.lists(), params] as const,
    details: () => [...keys.all, "detail"] as const,
    detail: (id: number | string) => [...keys.details(), id] as const,
  };
  return keys;
}

// Helper types for better type inference
export type ApiFnReturnType<
  FnType extends (...args: unknown[]) => Promise<unknown>
> = Awaited<ReturnType<FnType>>;

export type QueryConfig<T extends (...args: unknown[]) => unknown> = Omit<
  ReturnType<T>,
  "queryKey" | "queryFn"
>;

export type MutationConfig<
  MutationFnType extends (...args: unknown[]) => Promise<unknown>
> = UseMutationOptions<
  ApiFnReturnType<MutationFnType>,
  Error,
  Parameters<MutationFnType>[0]
>;
