import { Outlet } from "react-router-dom";
import { Sidebar } from "./components/layout/Sidebar";

function App() {
  return (
    <div className="flex max-w-full">
      <div className="w-[100px]">
        <Sidebar />
      </div>
      <div className="max-w-full">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
