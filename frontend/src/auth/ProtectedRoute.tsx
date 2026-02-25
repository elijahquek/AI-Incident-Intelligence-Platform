/*
Check token
   ↓
No token → redirect to login
Token exists → allow page
*/
import { Navigate } from "react-router-dom"
import { getToken } from "../utils/tokenstorage"
import type { JSX } from "react/jsx-dev-runtime"

export default function ProtectedRoute({ children }: { children: JSX.Element }) {

  const token = getToken()

  if (!token) {
    return <Navigate to="/" replace />
  }

  return children
}
