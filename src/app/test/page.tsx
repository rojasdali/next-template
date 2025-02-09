"use client";

import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/theme/theme-switcher";
import { apiClient } from "@/lib/api-client";
import { toast } from "@/hooks/use-toast";
import { ContentLayout } from "@/components/layouts/content-layout";
import { MainLayout } from "@/components/layouts/main-layout";

export default function TestPage() {
  const triggerError = () => {
    throw new Error("This is a test error!");
  };

  const testGet = async () => {
    try {
      const data = await apiClient("/test");
      console.log("GET Response:", data);
      toast({
        title: "GET Success",
        description: JSON.stringify(data, null, 2),
      });
    } catch (error) {
      console.error("GET Error:", error);
    }
  };

  const testPost = async () => {
    try {
      const data = await apiClient("/test", {
        method: "POST",
        body: { test: "data" },
      });
      console.log("POST Response:", data);
      toast({
        title: "POST Success",
        description: JSON.stringify(data, null, 2),
      });
    } catch (error) {
      console.error("POST Error:", error);
    }
  };

  return (
    <MainLayout>
      <ContentLayout title="Test Page">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            <ThemeSwitcher />
            <Button variant="destructive" onClick={triggerError}>
              Trigger Error
            </Button>
          </div>
          <div className="flex items-center gap-4">
            <Button onClick={testGet}>Test GET</Button>
            <Button onClick={testPost}>Test POST</Button>
          </div>
        </div>
      </ContentLayout>
    </MainLayout>
  );
}
