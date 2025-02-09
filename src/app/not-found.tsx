import Link from "next/link";
import { MainLayout } from "@/components/layouts/main-layout";
import { ContentLayout } from "@/components/layouts/content-layout";
import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";

export default function NotFound() {
  return (
    <MainLayout>
      <ContentLayout>
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
          <p className="text-7xl font-bold">404</p>
          <h1 className="mt-4 text-2xl font-semibold">Page not found</h1>
          <p className="mt-2 text-muted-foreground max-w-[500px]">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
          <Button asChild className="mt-8">
            <Link href="/">
              <HomeIcon className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </ContentLayout>
    </MainLayout>
  );
}
