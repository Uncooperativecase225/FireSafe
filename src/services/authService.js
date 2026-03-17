const API = import.meta.env.VITE_API_URL

export const loginUser = async (credentials) => {

  // simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  // mock login logic
  if (
    credentials.email === "test@gmail.com" &&
    credentials.password === "123456"
  ) {
    return {
      token: "mock-jwt-token-123",
      user: {
        name: "Test User",
        email: credentials.email
      }
    }
  }

  throw new Error("Invalid credentials")
}


export const registerUser = async (userData) => {

  await new Promise((resolve) => setTimeout(resolve, 500))

  return {
    token: "mock-jwt-token-123",
    user: {
      name: userData.name,
      email: userData.email
    }
  }
}