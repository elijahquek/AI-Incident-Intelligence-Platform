import { createBrowserRouter } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import DashboardPage from "./pages/DashboardPage"
import ProtectedRoute from "./auth/ProtectedRoute"
import CreateIncidentPage from "./pages/CreateIncidentPage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardPage />
      </ProtectedRoute>
    )
  },
  {
  path: "/incidents/new",
  element: (
    <ProtectedRoute>
      <CreateIncidentPage />
    </ProtectedRoute>
  )
}
])