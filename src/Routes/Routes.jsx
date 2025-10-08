import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import Wishlist from "../Pages/Wishlist";
import ProductDetails from "../Pages/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        // loader: () => fetch("./furnitureData.json"),
      },
      {
        path: "/products",
        element: <Products> </Products>,
      },
      {
        path: "/wishlist",
        element: <Wishlist></Wishlist>,
      },
      {
        path: "product/:id",
        element: <ProductDetails></ProductDetails>,
      },
    ],
  },
]);

export default router;
