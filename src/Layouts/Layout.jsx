import { useThemeContext } from "../context/ThemeStyle";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
const Layout = () => {
  const { bgColor } = useThemeContext();

  return (
    <div className={`px-4 md:px-8 lg:px-12 lx:px-16 2xl:px-24 ${bgColor}`}>
      <Navbar />
      <main className="min-h-screen container mx-auto  scroll-py-8">

      <Outlet />
      </main>
    </div>
  );
};

export default Layout;
