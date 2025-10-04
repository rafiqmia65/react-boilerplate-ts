
import { Outlet } from "react-router";

const MainLayouts = () => {
  return (
    <div>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default MainLayouts;
