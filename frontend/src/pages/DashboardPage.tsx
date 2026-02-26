import { useEffect, useState } from "react"
import { getIncidents } from "../api/incidentApi"
import { clearToken } from "../utils/tokenstorage"
import { Link, useNavigate } from "react-router-dom"
import IncidentCard from "../components/IncidentCard"

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

      <Link to="/incidents/new">
        Create Incident
      </Link>
      
    {incidents.map((incident) => (
      <IncidentCard key={incident.id} incident={incident} />
    ))}
    
      <button onClick={logout}>Logout</button>
    </div>
  )
}