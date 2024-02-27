import React from "react"
import useFetch from "../../hooks/useFetch"
import Loader from "../atoms/Loader"
import ProductCard from "../molecules/ProductCard"

export const Products = () => {
  const { data, error, loading } = useFetch("public/products")

  if (loading) return <Loader />
  if (error) return <div>{error?.message}</div>

  return (
    <section className="py-16 max-w-256 m-auto">
      <h1 className="text-3xl mb-6">Our Products</h1>
      <div className="grid grid-cols-4 gap-6">
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default Products
