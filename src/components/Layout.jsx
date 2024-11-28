import Navbar from "./Navbar";
import { useTheme } from "../context/theme-provider";
const Layout = ({ children }) => {

    const { theme } = useTheme();
    const bgColor = theme === "dark" ? "bg-gray-900" : "bg-white";

  return (
    <div className={`px-4 md:px-8 lg:px-12 lx:px-16 2xl:px-24 ${bgColor}`}>
      <Navbar/>
      <main className="min-h-screen container mx-auto  scroll-py-8">
        {children}
      </main> 
    </div>
  );
};

export default Layout;
