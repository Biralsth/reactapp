

import { createBrowserRouter, Outlet } from "react-router";
import { RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";

import RootLayout from "./component/RootLayout";
import Ui from "./proj/Ui";
import Product from "./pages/product/Product";
import Beschreibung from "./pages/home/Beschreibung";
import Menu from "./pages/home/Menu";
import ContactDeRestro from "./pages/home/ContactDeRestro";


export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />

        },
        {
          path: 'menu',
          element: <Menu />

        },
        {
          path: 'about',
          element: <Beschreibung />,

        },
        {
          path: 'contact',
          element: <ContactDeRestro />
        }],
    }

  ]);

  return <div className="">

    <RouterProvider router={router} />

  </div>


}
