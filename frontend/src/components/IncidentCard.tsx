export default function IncidentCard({ incident }: any) {

  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "10px",
      marginBottom: "10px"
    }}>

      <h3>{incident.title}</h3>

      <p>{incident.description}</p>

      <strong>Severity: {incident.severity}</strong>

    </div>
  )
}