import { getToken } from "../utils/tokenService"

const API = import.meta.env.VITE_API_URL

export const apiFetch = async (endpoint, options = {}) => {

  const token = getToken()

  const response = await fetch(`${API}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
      ...(options.headers || {})
    }
  })

  if (!response.ok) {

    if (response.status === 401) {
      localStorage.removeItem("firesafe_token")
      window.location.href = "/"
    }

    const error = await response.json().catch(() => ({}))
    throw new Error(error.message || "API request failed")
  }

  return response.json()
}