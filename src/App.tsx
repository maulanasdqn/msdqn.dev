import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="overflow-x-auto flex gap-y-4 flex-col justify-start items-center w-full h-screen p-16">
      <Outlet />
    </div>
  );
}

export default App;
