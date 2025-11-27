import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";

import Home from "./pages/Home";
import Analysis from "./pages/Analysis";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
const RootLayout = () => (
  <>
    <Header />
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

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
