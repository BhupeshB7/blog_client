import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./routes/Homepage";
import LoginPage from "./routes/LoginPage";
import Registerpage from "./routes/Registerpage";
import PostlistPage from "./routes/PostlistPage";
import SinglepostPage from "./routes/SinglepostPage";
import Write from "./routes/Write";
import Layout from "./Layouts/Layout";
import { ThemeProvider } from "./context/theme-provider";
import { ClerkProvider } from "@clerk/clerk-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { HelmetProvider } from "react-helmet-async";
const queryClient = new QueryClient();
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/posts",
        element: <PostlistPage />,
      },
      {
        path: "/:slug",
        element: <SinglepostPage />,
      },
      {
        path: "/write",
        element: <Write />,
      },
      {
        path: "/register",
        element: <Registerpage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
    <ThemeProvider defaultTheme="dark">
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <Toaster position="bottom-right" />
        </QueryClientProvider>
      </ClerkProvider>
    </ThemeProvider>
    </HelmetProvider>
  </StrictMode>
);
