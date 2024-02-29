import React from "react"
import useFetch from "../../../../hooks/useFetch"
import { Link } from "react-router-dom"
import axios from "axios"
import { API_URL } from "../../../../constants/env"
import { token } from "../../../../helpers/auth"
import Loader from "../../../atoms/Loader"

export const Table = () => {
  const { data, error, loading } = useFetch("public/products")

  const deleteProduct = (product) => {
    if (window.confirm("Are you sure to delete?")) {
      axios
        .delete(`${API_URL}/admin/products/${product.id}`, {
          headers: {
            Authorization: `Bearer ${token()}`,
          },
        })
        .then(() => alert("Product deleted"))
    }
  }

  if (loading) return <Loader />
  if (error) return <div>{error?.message}</div>

  return (
    <div className="max-w-256 m-auto">
      <section className="pt-10">
        <h1 className="text-4xl mb-6">Products</h1>
        <div className="pt-1 mb-12 pb-1">
          <Link className="bg-gradient button" to="/admin/products/create">
            Add a product
          </Link>
        </div>
        <table className="overflow-x-scroll">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 && (
              <tr>
                <td colSpan={4}>No product available</td>
              </tr>
            )}
            {data.map((prod) => (
              <tr key={prod.id}>
                <td>{prod.product_name}</td>
                <td>{prod.price}</td>
                <td>
                  <Link to={`/admin/products/edit/${prod.id}`}>Edit</Link>
                </td>
                <td>
                  <a
                    className="text-red-600 hover:cursor-pointer"
                    onClick={() => deleteProduct(prod)}
                  >
                    Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default Table
