import apiClient from "./client"

export async function getIncidents() {
  const response = await apiClient.get("/incidents")
  return response.data
}

export async function createIncident(data: any) {
  const response = await apiClient.post("/incidents", data)
  return response.data
}
