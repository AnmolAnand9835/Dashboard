import { Button } from "./components/ui/Button";
import { AppSidebar } from "./components/AppSidebar";
import { SidebarProvider } from "./components/ui/sidebar";
import { Level } from "./components/Level";
import "./App.css";
import "./index.css";

export default function App() {
  return (
    <>
      <div className="dark">
        <SidebarProvider>
          <AppSidebar />
          <div className="w-full text-center">
            <Level/>
          </div>
        </SidebarProvider>
      </div>
    </>
  );
}
