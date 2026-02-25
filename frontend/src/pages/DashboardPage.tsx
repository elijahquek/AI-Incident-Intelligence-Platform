import { useEffect, useState } from "react"
import { getIncidents } from "../api/incidentApi"

export default function DashboardPage() {

  const [incidents, setIncidents] = useState<any[]>([])

  useEffect(() => {
    async function loadIncidents() {
      const data = await getIncidents()
      setIncidents(data)
    }

    loadIncidents()
  }, [])

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
    </div>
  )
}