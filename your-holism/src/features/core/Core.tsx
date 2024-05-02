import { Outlet } from "react-router-dom";

function AppCore() {
  return (
    <div className="core-container">
      <h1>App Core</h1>
      <Outlet />
    </div>
  );
}

export default AppCore;
