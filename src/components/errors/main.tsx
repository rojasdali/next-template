"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export const MainErrorFallback = () => {
  const router = useRouter();

  return (
    <div
      className="flex h-screen w-screen flex-col items-center justify-center text-red-500"
      role="alert"
    >
      <h2 className="text-lg font-semibold">Ooops, something went wrong :( </h2>
      <Button
        className="mt-4"
        onClick={() => {
          router.refresh();
          router.push("/");
        }}
      >
        Refresh
      </Button>
    </div>
  );
};
