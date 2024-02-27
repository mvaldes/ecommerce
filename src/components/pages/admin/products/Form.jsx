import React from "react"
import { API_URL } from "../../../../constants/env"
import axios from "axios"
import { token } from "../../../../helpers/auth"

export const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault()

    const data = {
      product_name: e.target.productName.value,
      price: Number(e.target.price.value),
      images: [e.target.image.value],
      description: e.target.description.value,
      features: {
        color: e.target.color.value,
        // details: {
        //   color: e.target.color.value,
        //   brand: e.target.brand.value,
        //   model: e.target.model.value,
        //   year: e.target.year.value,
        //   category: e.target.category.value,
        // },
        // stats: {
        //   rating: Number(e.target.rating.value),
        //   sold: Number(e.target.sold.value),
        // },
      },
    }

    axios
      .post(`${API_URL}/admin/products`, data, {
        headers: {
          Authorization: `Bearer ${token()}`,
        },
      })
      .then((resp) => {
        console.log(resp)
      })
      .catch((err) => {
        console.log(err)
        console.log("ERROR")
      })
  }

  return (
    <>
      <h1>Create a product</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="productName" placeholder="Name" required />
        <input type="number" name="price" placeholder="Price" required />
        <input type="url" name="image" placeholder="Image" required />
        <textarea name="description" rows="10" required />
        <input type="text" name="color" placeholder="Color" required />
        <button type="submit">Create a product</button>
      </form>
    </>
  )
}

export default Form
