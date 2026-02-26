import { useState } from "react"
import { createIncident } from "../api/incidentApi"
import { useNavigate } from "react-router-dom"

export default function IncidentForm() {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [severity, setSeverity] = useState("LOW")

  const navigate = useNavigate()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    try {

      await createIncident({
        title,
        description,
        severity
      })

      navigate("/dashboard")

    } catch {
      alert("Failed to create incident")
    }
  }

  return (
    <form onSubmit={handleSubmit}>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <select
        value={severity}
        onChange={(e) => setSeverity(e.target.value)}
      >
        <option value="LOW">LOW</option>
        <option value="MEDIUM">MEDIUM</option>
        <option value="HIGH">HIGH</option>
      </select>

      <button type="submit">
        Create Incident
      </button>

    </form>
  )
}