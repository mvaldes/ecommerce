import { createBrowserRouter } from "react-router-dom"
import Home from "../components/pages/Home"
import { Error404 } from "../components/pages/Error404"
import { Products } from "../components/pages/Products"
import { App } from "../components/templates/App"
import { Login } from "../components/pages/Login"
import Register from "../components/pages/Register"
import { Form } from "../components/pages/admin/products/Form"

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
    path: "/admin/products/create",
    element: <Form />,
  },
  // {
  //   path: "/admin",
  //   element: <Admin />,
  //   children: [
  //     {
  //       path: "/admin/ventas",
  //       element: <Sales />,
  //     },
  //     {
  //       path: "/admin/productos",
  //       element: <Table />,
  //     },
  //     {
  //       path: "/admin/productos/crear",
  //       element: <Form />,
  //     },
  //     {
  //       path: "/admin/productos/editar/:id",
  //       element: <Form />,
  //     },
  //   ],
  // },
])

export default router
