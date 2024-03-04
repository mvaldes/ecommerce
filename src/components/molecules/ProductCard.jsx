import { Link } from "react-router-dom"
import { formatPrice } from "../../helpers/number"
import { MdAddCircle } from "react-icons/md"
import { MdOutlineRemoveCircle } from "react-icons/md"
import Button from "@mui/material/Button"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const ProductCard = ({ product }) => {
  const { images, product_name, id, price, description } = product

  const { state, dispatch } = useContext(CartContext)

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
    <article className="w-full max-w-sm bg-white rounded-lg shadow-lg p-5">
      <div className="mb-5 rounded-lg overflow-hidden">
        <Link to={`/products/${id}`}>
          <img
            className="align-middle h-40 w-full object-cover"
            src={images[0]}
            alt={product_name}
          />
        </Link>
      </div>
      <div className="mb-6">
        <Link to={`/products/${id}`}>
          <h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">
            {product_name}
          </h3>
        </Link>
        <p className="text-gray-500 line-clamp-2">{description}</p>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-xl font-bold text-gray-900">
          {formatPrice(price)}
        </span>
      </div>
      <div className="pt-2">
        {!state.cart.find((c) => c.id === product.id) ? (
          <Button
            onClick={addToCart}
            variant="contained"
            sx={styleObj}
            startIcon={<MdAddCircle />}
          >
            Add to cart
          </Button>
        ) : (
          <Button
            onClick={removeFromCart}
            variant="contained"
            sx={styleObj}
            startIcon={<MdOutlineRemoveCircle />}
          >
            Delete from cart
          </Button>
        )}
      </div>
    </article>
  )
}

export default ProductCard
