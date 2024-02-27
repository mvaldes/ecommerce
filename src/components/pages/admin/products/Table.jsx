import React from "react"
import useFetch from "../../hooks/useFetch"

export const Table = () => {
  const { data, error, loading } = useFetch("public/products")

  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>Product request error</h1>

  return (
    <div>
      <h1>Products</h1>
      {console.log("data.length", data)}
      {data.length === 0 ? (
        <p>No products available</p>
      ) : (
        data.map((prod) => <div key={prod.id}>{JSON.stringify(prod)}</div>)
      )}
    </div>
  )
}

export default Table
