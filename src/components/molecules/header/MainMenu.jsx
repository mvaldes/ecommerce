import React, { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { deleteToken, token } from "../../../helpers/auth"
import { UserContext } from "../../../context/UserContext"
import { CartContext } from "../../../context/CartContext"

export const MainMenu = () => {
  const nav = useNavigate()
  const { userData, setUserData } = useContext(UserContext)
  const { state } = useContext(CartContext)

  const handleSession = () => {
    deleteToken()
    nav("/")
    setUserData()
  }

  return (
    <nav className="w-full">
      <ul className="flex justify-end text-gray-100">
        <li className="flex items-center">
          <Link className="menu-item" to="/">
            Home
          </Link>
        </li>
        <li className="flex items-center">
          <Link className="menu-item" to="/products">
            Products
          </Link>
        </li>
        <li className="flex items-center">
          <Link className="menu-item" to="/cart">
            Cart ({state.cart.length})
          </Link>
        </li>

        {!token() ? (
          <li className="flex items-center">
            <Link className="menu-item" to="/login">
              Sign in
            </Link>
          </li>
        ) : (
          <>
            {userData?.is_admin && (
              <li className="flex items-center">
                <Link className="menu-item" to="/admin/products">
                  Admin products
                </Link>
              </li>
            )}
            <li className="flex items-center">
              <Link className="menu-item" to="/profile">
                My profile
              </Link>
            </li>
            <li className="flex items-center">
              <a
                onClick={handleSession}
                className="menu-item cursor-pointer"
                href=""
              >
                Sign out
              </a>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default MainMenu
