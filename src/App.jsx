import { Outlet } from "react-router-dom";
import { Sidebar } from "./components/layout/Sidebar";

function App() {
  return (
    <div className="flex">
      <div className="w-[100px]">
        <Sidebar />
      </div>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
