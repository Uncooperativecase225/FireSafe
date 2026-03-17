const TOKEN_KEY = import.meta.env.VITE_TOKEN_KEY || "firesafe_token"

export const saveToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token)
}

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY)
}

export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY)
}

export const isAuthenticated = () => {
  return !!localStorage.getItem(TOKEN_KEY)
}

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY)
}