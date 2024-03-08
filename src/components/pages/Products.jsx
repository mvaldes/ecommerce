import React, { useEffect, useState } from "react"
import useFetch from "../../hooks/useFetch"
import Loader from "../atoms/Loader"
import ProductCard from "../molecules/ProductCard"

export const Products = () => {
  const { data, error, loading } = useFetch("public/products")
  const [result, setResult] = useState([])

  useEffect(() => {
    if (data) setResult(data)
  }, [data])
  const handleFilter = (e) => {
    const filterValue = e.target.value.toLocaleLowerCase()

    setResult(
      data.filter((p) =>
        // eslint-disable-next-line prettier/prettier
        JSON.stringify(p).toLocaleLowerCase().includes(filterValue)
      )
    )
  }

  if (loading) return <Loader />
  if (error) return <div>{error?.message}</div>

  return (
    <section className="py-16 max-w-256 m-auto">
      <h1 className="text-3xl mb-6">Our Products</h1>
      <input
        type="text"
        placeholder="Product filter"
        className="mb-4"
        onChange={handleFilter}
      />
      <div className="grid grid-cols-4 gap-6">
        {result.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default Products
