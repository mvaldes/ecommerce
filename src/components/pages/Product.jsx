import axios from "axios"
import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { API_URL } from "../../constants/env"
import { CartContext } from "../../context/CartContext"
import AddCircleIcon from "@mui/icons-material/AddCircle"
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle"
import Button from "@mui/material/Button"

export const Product = () => {
  const params = useParams()
  const { state, dispatch } = useContext(CartContext)

  const [product, setProduct] = useState({})

  useEffect(() => {
    axios.get(`${API_URL}/public/products/${params.id}`).then((resp) => {
      setProduct(resp.data.data)
    })
  })

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    })
  }

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: product,
    })
  }

  const styleObj = {
    "&:hover": {
      backgroundColor: "#D93131",
    },
    "&:active": {
      backgroundColor: "#BB261D",
    },
    backgroundColor: "#BB261D",
  }

  return (
    <div>
      <h1 className="text-3xl">Product: {product?.product_name}</h1>
      <p>{JSON.stringify(product)}</p>
      {!state.cart.find((c) => c.id === product.id) ? (
        <Button
          onClick={addToCart}
          variant="contained"
          sx={styleObj}
          startIcon={<AddCircleIcon />}
        >
          Add to cart
        </Button>
      ) : (
        <Button
          onClick={removeFromCart}
          variant="contained"
          sx={styleObj}
          startIcon={<RemoveCircleIcon />}
        >
          Delete from cart
        </Button>
      )}
    </div>
  )
}
