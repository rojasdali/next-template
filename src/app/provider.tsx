"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import * as React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ThemeProvider } from "next-themes";
import { MainErrorFallback } from "@/components/errors/main";
import { Toaster } from "@/components/ui/toaster";
import { queryConfig } from "@/lib/react-query";

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: queryConfig,
      })
  );

  return (
    <ErrorBoundary FallbackComponent={MainErrorFallback}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <QueryClientProvider client={queryClient}>
          {process.env.NODE_ENV === "development" && <ReactQueryDevtools />}
          <Toaster />
          {children}
        </QueryClientProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
};
