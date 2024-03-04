import { createBrowserRouter } from "react-router-dom"
import Home from "../components/pages/Home"
import { Error404 } from "../components/pages/Error404"
import { Products } from "../components/pages/Products"
import { App } from "../components/templates/App"
import { Login } from "../components/pages/Login"
import Register from "../components/pages/Register"
import { Form } from "../components/pages/admin/products/Form"
import Table from "../components/pages/admin/products/Table"
import Admin from "../components/templates/Admin"
import { Sales } from "../components/pages/admin/Sales"
import { Product } from "../components/pages/Product"
import Cart from "../components/pages/Cart"
import Payment from "../components/pages/Payment"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/payment-success",
        element: <Payment />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/create",
    element: <Register />,
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "/admin/sales",
        element: <Sales />,
      },
      {
        path: "/admin/products",
        element: <Table />,
      },
      {
        path: "/admin/products/create",
        element: <Form />,
      },
      {
        path: "/admin/products/edit/:id",
        element: <Form />,
      },
    ],
  },
])

export default router
