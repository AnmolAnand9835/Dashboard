import { Button } from "./components/ui/Button";
import { AppSidebar } from "./components/AppSidebar";
import { SidebarProvider } from "./components/ui/sidebar";
import { Dashboard } from './components/Dashboard'
import { Inventory } from "./components/Inventory";
import { Shop } from "./components/Shop";
import "./App.css";
import "./index.css";

export default function App() {
  return (
    <>
      <div className="dark bg-[#0B0B12] min-h-screen">
        <SidebarProvider>
          <AppSidebar />
          <Shop/>
        </SidebarProvider>
      </div>
    </>
  );
}
