// import axios from "axios"
import { useState } from "react"
import { useContext } from "react"
import { Link } from "react-router-dom"
// import { API_URL } from "../../constants/env"
import { CartContext } from "../../context/CartContext"
import { token } from "../../helpers/auth"
import SummaryItem from "../atoms/SummaryItem"
import axios from "axios"
import { API_URL } from "../../constants/env"
import PayPalPayment from "../organisms/PayPalPayment"

function Cart() {
  const { state } = useContext(CartContext)
  const [order, setOrder] = useState()

  let value = 0
  state.cart.forEach((c) => (value += c.price))

  const handleOrder = () => {
    const products = state.cart.map((product) => {
      return {
        product_id: product.id,
        amount: 1, // can be better if add more than 1 of the same product
        unit_price: product.price,
      }
    })
    const data = {
      products,
    }
    axios
      .post(`${API_URL}/private/purchase-orders`, data, {
        headers: {
          Authorization: `Bearer ${token()}`,
        },
      })
      .then((resp) => {
        setOrder(resp.data.data)
      })
  }

  return (
    <div className="max-w-256 m-auto">
      <div className="grid grid-cols-3 gap-8 mb-16">
        <section className="col-span-2 pt-10">
          <h1 className="text-3xl font-semibold mb-6">Cart</h1>
          {state?.cart?.length > 0 ? (
            <div>
              <div className="grid mb-2 border-t border-gray-300/60">
                {state.cart.map((prod) => (
                  <SummaryItem key={prod.id} product={prod} />
                ))}
              </div>
              {!order ? (
                <button className="bg-gradient" onClick={handleOrder}>
                  Order
                </button>
              ) : (
                <>
                  <p>Order id: {order.id}</p>
                  <PayPalPayment value={value} order={order} />
                </>
              )}
            </div>
          ) : (
            <>
              <p className="mb-2">Your cart is empty</p>
              <Link to="/products" className="button bg-gradient">
                See product
              </Link>
            </>
          )}
        </section>
      </div>
    </div>
  )
}

export default Cart
