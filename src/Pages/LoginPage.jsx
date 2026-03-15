import { useState } from "react";
import { useNavigate } from "react-router-dom";

import TopBar from "../components/AuthPage/Topbar";
import AuthCard from "../components/Authpage/AuthCard";
import InputField from "../components/AuthPage/InputField";
import PasswordField from "../components/AuthPage/PasswordField";
import PrimaryButton from "../components/AuthPage/PrimaryButton";
import GoogleButton from "../components/AuthPage/GoogleButton";
import Divider from "../components/AuthPage/Divider";
import SignupLink from "../components/AuthPage/SignupLink";

export default function LoginPage() {

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const validateForm = () => {

    if (!email.includes("@")) {
      setError("Enter a valid email address")
      return false
    }

    if (!password) {
      setError("Password cannot be empty")
      return false
    }

    setError("")
    return true
  }

  const handleLogin = async (e) => {

    e.preventDefault()

    if (!validateForm()) return

    setLoading(true)

    try {

      // backend call will go here later

      await new Promise((resolve) => setTimeout(resolve, 1500))

      navigate("/dashboard")

    } catch (err) {

      setError("Login failed. Please try again.")

    }

    setLoading(false)
  }

  const handleGoogleLogin = () => {

    console.log("Google login clicked")

  }

  return (

    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 flex flex-col">

      <TopBar />

      <div className="flex flex-1 items-center justify-center px-4">

        <AuthCard>

          <h2 className="text-2xl font-semibold text-center mb-2">
            Login to FireSafe
          </h2>

          <form onSubmit={handleLogin} className="flex flex-col gap-4">

            <InputField
              label="Email Address"
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <PasswordField
              label="Password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && (
              <p className="text-red-500 text-sm text-center">
                {error}
              </p>
            )}

            <PrimaryButton
              loading={loading}
              disabled={!email || !password}
            />

          </form>

          <Divider />

          <GoogleButton onClick={handleGoogleLogin} />

          <SignupLink />

        </AuthCard>

      </div>

    </div>
  )
}