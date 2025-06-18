

import { createBrowserRouter, Outlet } from "react-router";
import { RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Header from "./component/Header";
import Page1 from "./pages/home/nested/Page1"
import Page2 from "./pages/home/nested/Page2"
import RootLayout from "./component/RootLayout";
import Ui from "./proj/Ui";
import Product from "./pages/product/Product";


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
          path: 'product/:id',
          element: <Product />

        },
        {
          path: 'about',
          element: <About />,

        },
        {
          path: 'contact',
          element: <Contact />
        }],
    }

  ]);

  return <div className="">

    <RouterProvider router={router} />

  </div>


}
