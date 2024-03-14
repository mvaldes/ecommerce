import { Link } from "react-router-dom"

const Payment = () => {
  return (
    <div className="max-w-256 m-auto">
      <section className="pt-10 text-center">
        <h1 className="text-4xl mb-6">Your payment was successful!!!</h1>
        <Link to="/products" className="button bg-gradient">
          View more products
        </Link>
      </section>
    </div>
  )
}

export default Payment
