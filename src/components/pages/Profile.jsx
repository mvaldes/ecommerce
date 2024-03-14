import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import { token } from "../../helpers/auth"
import useFetch from "../../hooks/useFetch"
import Loader from "../atoms/Loader"

const Profile = () => {
  const { userData } = useContext(UserContext)
  const { data, loading, error } = useFetch("private/invoices", {
    headers: {
      Authorization: `Bearer ${token()}`,
    },
  })

  if (loading) return <Loader />

  if (error) return <div>{error?.message}</div>

  return (
    <div className="max-w-256 m-auto">
      <section className="pt-10 mb-6">
        <h1 className="text-4xl mb-6">My profile</h1>
        <p>
          <span className="font-bold">User ID: </span>
          <span>{userData?.id}</span>
        </p>
        <p>
          <span className="font-bold">Fullname: </span>
          <span>{userData?.details.fullname}</span>
        </p>
        <p>
          <span className="font-bold">Email: </span>
          <span>{userData?.email}</span>
        </p>
        <p>
          <span className="font-bold">Register date: </span>
          <span>{userData?.created_at}</span>
        </p>
      </section>
      <section>
        <h2 className="text-2xl mb-4">Buy history</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Buy ID</th>
              <th>User email</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((p) => (
                <tr key={p.invoice.id}>
                  <td>{new Date(p.invoice.created_at * 1000).toString()}</td>
                  <td>{p.invoice.id}</td>
                  <td>{p.user.email}</td>
                </tr>
              ))}
            {!data && (
              <tr>
                <td colSpan={3}>You currently have no purchases</td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default Profile
