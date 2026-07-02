import { AppSidebar } from "./components/AppSidebar";
import { SidebarProvider } from "./components/ui/sidebar";
import { Dashboard } from './components/Dashboard'
import { Inventory } from "./components/Inventory";
import { Shop } from "./components/Shop";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import { Level } from "./components/Level";

export default function App() {
  return (
    <>
      <div className="dark bg-[#0B0B12] min-h-screen">
        <SidebarProvider>
          <AppSidebar />
          <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/inventory" element={<Inventory/>}/>
          </Routes>
        </SidebarProvider>
      </div>
    </>
  );
}
