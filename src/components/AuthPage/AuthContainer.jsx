import { useState } from "react"
import { useNavigate } from "react-router-dom"

import InputField from "./InputField"
import PasswordField from "./PasswordField"
import PrimaryButton from "./PrimaryButton"
import GoogleButton from "./GoogleButton"
import Divider from "./Divider"

import { loginUser, registerUser } from "../../services/authService"
import { saveToken } from "../../utils/tokenService"

export default function AuthContainer() {

  const navigate = useNavigate()

  const [isSignUp, setIsSignUp] = useState(false)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  // Login state
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")

  // Signup state
  const [signupName, setSignupName] = useState("")
  const [signupEmail, setSignupEmail] = useState("")
  const [signupPassword, setSignupPassword] = useState("")

  // LOGIN HANDLER

  const handleLogin = async (e) => {

    e.preventDefault()
    console.log("login clicked");
    

    if (!loginEmail || !loginPassword) {
      setError("Please fill in all fields")
      return
    }

    try {

      setLoading(true)
      setError("")

      const data = await loginUser({
        email: loginEmail,
        password: loginPassword
      })
      console.log("LOGIN: ", data);
      

      saveToken(data.token)

      navigate("/dashboard")

    } catch (err) {

      setError(err.message)

    } finally {

      setLoading(false)

    }

  }

  // SIGNUP HANDLER

  const handleSignup = async (e) => {

    e.preventDefault()

    if (!signupName || !signupEmail || !signupPassword) {
      setError("All fields are required")
      return
    }

    try {

      setLoading(true)
      setError("")

      const data = await registerUser({
        name: signupName,
        email: signupEmail,
        password: signupPassword
      })

      saveToken(data.token)

      navigate("/dashboard")

    } catch (err) {

      setError(err.message)

    } finally {

      setLoading(false)

    }

  }

  return (

    <div className="flex items-center justify-center w-full px-4">

      <div className="relative w-full max-w-225 min-h-130 bg-white rounded-xl shadow-xl overflow-hidden">

        {/* FORMS CONTAINER */}

        <div className="grid grid-cols-2 h-full relative z-10">

          {/* SIGN IN */}

          <div className="flex flex-col justify-center p-10">

            <h2 className="text-2xl font-semibold mb-6">
              Sign In
            </h2>

            <form onSubmit={handleLogin} className="space-y-4">

              <InputField
                label="Email Address"
                id="login-email"
                type="email"
                placeholder="Enter your email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />

              <PasswordField
                label="Password"
                id="login-password"
                placeholder="Enter your password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />

              {error && (
                <p className="text-red-500 text-sm">
                  {error}
                </p>
              )}

              <PrimaryButton loading={loading} />

            </form>

            <div className="mt-6">
              <Divider />
            </div>

            <div className="mt-4">
              <GoogleButton />
            </div>

          </div>

          {/* SIGN UP */}

          <div className="flex flex-col justify-center p-10">

            <h2 className="text-2xl font-semibold mb-6">
              Sign Up
            </h2>

            <form onSubmit={handleSignup} className="space-y-4">

              <InputField
                label="Full Name"
                id="signup-name"
                type="text"
                placeholder="Enter your name"
                value={signupName}
                onChange={(e) => setSignupName(e.target.value)}
              />

              <InputField
                label="Email Address"
                id="signup-email"
                type="email"
                placeholder="Enter your email"
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
              />

              <PasswordField
                label="Password"
                id="signup-password"
                placeholder="Create a password"
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
              />

              {error && (
                <p className="text-red-500 text-sm">
                  {error}
                </p>
              )}

              <PrimaryButton loading={loading} />

            </form>

          </div>

        </div>

        {/* SLIDING OVERLAY */}

        <div
          className={`
          absolute top-0 left-0 h-full w-1/2
          flex items-center justify-center
          bg-linear-to-r from-cyan-400 to-lime-500
          text-white text-center px-10
          z-20
          transition-transform duration-500
          ${isSignUp ? "translate-x-full" : ""}
          `}
        >

          {isSignUp ? (

            <div>

              <h2 className="text-2xl font-bold mb-4">
                Welcome Back!
              </h2>

              <p className="mb-6">
                Already have an account?
              </p>

              <button
                onClick={() => {
                  setIsSignUp(false)
                  setError("")
                }}
                className="border px-6 py-2 rounded-lg hover:bg-white hover:text-black transition"
              >
                Sign In
              </button>

            </div>

          ) : (

            <div>

              <h2 className="text-2xl font-bold mb-4">
                New Here?
              </h2>

              <p className="mb-6">
                Create an account to start using FireSafe.
              </p>

              <button
                onClick={() => {
                  setIsSignUp(true)
                  setError("")
                }}
                className="border px-6 py-2 rounded-lg hover:bg-white hover:text-black transition"
              >
                Sign Up
              </button>

            </div>

          )}

        </div>

      </div>

    </div>

  )

}