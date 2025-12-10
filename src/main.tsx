// paramétrage du QueryClient de TanStack
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Home from "./pages/Home";
import Analysis from "./pages/Analysis";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const RootLayout = () => (
  <>
    <NavBar />
    <Outlet /> {/* ///from react becoming page componant */}
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, /* // pas d'App.tsx ! */
    children: [
      { index: true, element: <Home /> },
      { path: "analysis", element: <Analysis /> },
      { path: "about", element: <About /> },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
