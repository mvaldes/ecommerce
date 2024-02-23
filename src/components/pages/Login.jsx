import axios from 'axios'
import { useState} from 'react'
import { API_URL } from '../../constants/env'
import { setToken } from '../../helpers/auth'
import { Link, useNavigate } from 'react-router-dom'
import LoginTemplate from '../templates/LoginTemplate'

export const Login = () => {
    const nav = useNavigate()

    const [error, setError] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        setError()
        
        const data = {
            email: e.target.email.value,
            password: e.target.password.value,
        }

        axios
            .post(`${API_URL}/public/login`, data)
            .then((resp) => {
                setToken(resp.data.data.token)
                nav("/")
            })
            .catch((err) => {
                setError(err)
            })
    }
  return (
    <LoginTemplate title="Log to account">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            name="email"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
          />
        </div>
        <div className="text-center pt-1 mb-12 pb-1">
          <button className="bg-gradient w-full" type="submit">
            Log in
          </button>
          <Link className="text-gray-500" to="/registro">
            Register?
          </Link>
        </div>
        {error && (
          <p className="text-center p-2 bg-red-100 text-red-800">
            {error?.response?.data?.data}
          </p>
        )}
      </form>
    </LoginTemplate>
  )
}
