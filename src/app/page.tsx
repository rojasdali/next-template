import { MainLayout } from "@/components/layouts/main-layout";
import { ContentLayout } from "@/components/layouts/content-layout";

export default function HomePage() {
  return (
    <MainLayout>
      <ContentLayout title="Welcome">
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          <h1 className="text-4xl font-bold">Next.js Template</h1>
          <p className="mt-4 text-muted-foreground">
            Start building your app by editing src/app/page.tsx
          </p>
        </div>
      </ContentLayout>
    </MainLayout>
  );
}
