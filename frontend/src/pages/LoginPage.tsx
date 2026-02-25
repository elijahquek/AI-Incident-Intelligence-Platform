import { useState } from "react"
import { login } from "../api/authApi"
import { saveToken } from "../utils/tokenstorage"
import { useNavigate } from "react-router-dom"

export default function LoginPage() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()

    try {
      const data = await login(username, password)

      saveToken(data.access_token)

      navigate("/dashboard")

    } catch (error) {
      alert("Login failed: " + error)
    }
  }

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleLogin}>

        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>

      </form>
    </div>
  )
}