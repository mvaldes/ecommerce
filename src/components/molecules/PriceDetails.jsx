import { BsShieldCheck } from "react-icons/bs"
import { formatPrice, getInstallments } from "../../helpers/number"

const PriceDetails = ({ price, includeIva }) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <div>
        <span className="font-semibold text-3xl">{formatPrice(price)}</span>
        <p className="text-gray-600">
          in{" "}
          <span className="text-green-500 font-semibold">
            {getInstallments(price, 12)}
          </span>
        </p>
        {includeIva && <p className="text-gray-600 text-sm">tax included</p>}
      </div>
      <div className="flex items-center gap-2">
        <BsShieldCheck className="text-2xl" />
        <div className="text-sm">
          <p className="font-semibold text-gray-600">75 days waranty</p>
          <p className="text-gray-600">Money back guarantee</p>
        </div>
      </div>
    </div>
  )
}

export default PriceDetails
