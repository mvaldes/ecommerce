import { Link } from "react-router-dom"
import { token } from "../../../helpers/auth"
import useFetch from "../../../hooks/useFetch"
import Loader from "../../atoms/Loader"

export const Sales = () => {
  const { data, loading, error } = useFetch("admin/invoices", {
    headers: {
      Authorization: `Bearer ${token()}`,
    },
  })

  if (loading) return <Loader />

  if (error) return <div>{error?.message}</div>

  return (
    <div className="max-w-256 m-auto">
      <section className="pt-10">
        <h1 className="text-4xl mb-6">Sales</h1>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Buying ID</th>
              <th>User email</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((p) => (
                <tr key={p.invoice.id}>
                  <td>{new Date(p.invoice.created_at).toString()}</td>
                  <td>{p.invoice.id}</td>
                  <td>{p.user.email}</td>
                </tr>
              ))}
          </tbody>
        </table>
        {!data && (
          <>
            <p className="mb-2">You have currently no sales</p>
            <Link to="/products" className="button bg-gradient">
              See product
            </Link>
          </>
        )}
      </section>
    </div>
  )
}

export default Sales
