import { Link } from "react-router-dom"

const AdminMenu = () => {
  return (
    <nav className="w-full">
      <ul className="flex justify-end text-gray-100">
        <li className="flex items-center">
          <Link className="menu-item" to="/admin/products">
            Products
          </Link>
        </li>
        <li className="flex items-center">
          <Link className="menu-item" to="/admin/sales">
            Sales
          </Link>
        </li>
        <li className="flex items-center">
          <Link className="menu-item" to="/">
            Back to app
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default AdminMenu
