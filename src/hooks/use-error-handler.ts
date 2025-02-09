"use client";

import { useErrorBoundary } from "react-error-boundary";
import { toast } from "@/hooks/use-toast";

export function useErrorHandler() {
  const { showBoundary } = useErrorBoundary();

  return {
    onError: (error: unknown) => {
      const message =
        error instanceof Error ? error.message : "An error occurred";
      toast({
        variant: "destructive",
        title: "Error",
        description: message,
      });
      showBoundary(error);
    },
  };
}
