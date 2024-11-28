import Layout from "./components/Layout"; 
import { ThemeProvider } from "./context/theme-provider";

const App = () => {
  return (
    <div>
      <ThemeProvider defaultTheme="dark">
        <Layout> 
          {/* Breadcrumb */}
          {/* Introduction */}
          {/* featured posts */}
          {/* post list */}
        </Layout>
        {/* Navbar */}
      </ThemeProvider>
    </div>
  );
};

export default App;
