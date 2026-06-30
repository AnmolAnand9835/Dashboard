import { Button } from "./components/ui/Button";
import { AppSidebar } from "./components/AppSidebar";
import { SidebarProvider } from "./components/ui/sidebar";
import { StatsCard } from "./components/StartCard";
import { Level } from "./components/Level";
import { Hero } from "./components/Hero";
import { Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import "./App.css";
import "./index.css";

export default function App() {
  return (
    <>
      <div className="dark bg-[#0B0B12] min-h-screen">
        <SidebarProvider>
          <AppSidebar />
          <div className="w-full text-center">
            <Level />
            <StatsCard />
            <Card className="flex flex-col justify-between gap-6 p-2 mt-6">
              <CardHeader>
                <CardTitle className="text-3xl md:text-3xl">Inventory</CardTitle>
              </CardHeader>
            <CardContent className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mt-6 text text-white">
              <Hero/>
              <Hero/>
              <Hero/>
              <Hero/>
            </CardContent>
            </Card>
          </div>
        </SidebarProvider>
      </div>
    </>
  );
}
