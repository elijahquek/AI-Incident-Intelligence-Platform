import { useEffect, useState } from "react"
import { getIncidents } from "../api/incidentApi"
import { clearToken } from "../utils/tokenstorage"
import { useNavigate } from "react-router-dom"

export default function DashboardPage() {

  const [incidents, setIncidents] = useState<any[]>([])

  useEffect(() => {
    async function loadIncidents() {
      const data = await getIncidents()
      setIncidents(data)
    }

    loadIncidents()
  }, [])

  const navigate = useNavigate()

  function logout() {
    clearToken()
    navigate("/")
  }
  
  return (
    <div>
      <h2>Dashboard</h2>

      {incidents.map((incident) => (
        <div key={incident.id}>
          <h3>{incident.title}</h3>
          <p>{incident.description}</p>
          <p>Severity: {incident.severity}</p>
        </div>
      ))}
      <button onClick={logout}>Logout</button>
    </div>
  )
}