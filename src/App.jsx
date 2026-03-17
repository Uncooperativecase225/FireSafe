import { BrowserRouter, Routes, Route } from "react-router-dom"

import LoginPage from "./Pages/LoginPage"
import Dashboard from "./Pages/Dashboard"
import { isAuthenticated } from "./utils/tokenService"
import { Navigate } from "react-router-dom"
import ProtectedRoute from "./components/ProtectedRoute"

function App() {
  return (
      <Routes>

        {/* Public Route */}
        <Route
          path="/"
          element={
            isAuthenticated() ? <Navigate to="/dashboard" replace /> : <LoginPage />
          }
/>

        {/* Protected Route */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

      </Routes>
  )
}

export default App