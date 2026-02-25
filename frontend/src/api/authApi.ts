import apiClient from "./client"

export async function login(username: string, password: string) {
  const response = await apiClient.post("/auth/login", {
    username: username,
    password: password
  })

  return response.data
}