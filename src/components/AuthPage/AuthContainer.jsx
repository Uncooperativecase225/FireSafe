import { useState } from "react";
import { useNavigate } from "react-router-dom";

import InputField from "./InputField";
import PasswordField from "./PasswordField";
import PrimaryButton from "./PrimaryButton";
import GoogleButton from "./GoogleButton";
import Divider from "./Divider";

import { loginUser, registerUser } from "../../services/authService";
import { saveToken } from "../../utils/tokenService";

export default function AuthContainer() {
  const navigate = useNavigate();

  const [isSignUp, setIsSignUp] = useState(false);

  const [loginLoading, setLoginLoading] = useState(false);
  const [signupLoading, setSignupLoading] = useState(false);

  const [loginError, setLoginError] = useState("");
  const [signupError, setSignupError] = useState("");

  // login state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // signup state
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  // ---------------- LOGIN ----------------
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!loginEmail || !loginPassword) {
      setLoginError("Please fill in all fields");
      return;
    }

    try {
      setLoginLoading(true);
      setLoginError("");

      const data = await loginUser({
        email: loginEmail,
        password: loginPassword,
      });

      saveToken(data.token);
      navigate("/dashboard");
    } catch (err) {
      setLoginError(err.message || "Login failed");
    } finally {
      setLoginLoading(false);
    }
  };

  // ---------------- SIGNUP ----------------
  const handleSignup = async (e) => {
    e.preventDefault();

    if (!signupName || !signupEmail || !signupPassword) {
      setSignupError("All fields are required");
      return;
    }

    try {
      setSignupLoading(true);
      setSignupError("");

      const data = await registerUser({
        name: signupName,
        email: signupEmail,
        password: signupPassword,
      });

      saveToken(data.token);
      navigate("/dashboard");
    } catch (err) {
      setSignupError(err.message || "Signup failed");
    } finally {
      setSignupLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center w-full px-4">
      <div className="relative w-full max-w-5xl min-h-137.5 bg-white rounded-2xl shadow overflow-hidden">

        {/* FORMS */}
        <div className="grid grid-cols-2 h-full">

          {/* SIGN IN */}
          <div className="flex flex-col justify-center p-10">
            <h2 className="text-2xl font-semibold mb-6">Sign In</h2>

            <form onSubmit={handleLogin} className="space-y-4">
              <InputField
                label="Email Address"
                type="email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />

              <PasswordField
                label="Password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />

              {loginError && (
                <p className="text-red-500 text-sm">{loginError}</p>
              )}

              <PrimaryButton
                loading={loginLoading}
                loadingText="Signing In..."
              >
                Sign In
              </PrimaryButton>
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
            <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>

            <form onSubmit={handleSignup} className="space-y-4">
              <InputField
                label="Full Name"
                value={signupName}
                onChange={(e) => setSignupName(e.target.value)}
              />

              <InputField
                label="Email Address"
                type="email"
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
              />

              <PasswordField
                label="Password"
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
              />

              {signupError && (
                <p className="text-red-500 text-sm">{signupError}</p>
              )}

              <PrimaryButton
                loading={signupLoading}
                loadingText="Creating Account..."
              >
                Sign Up
              </PrimaryButton>
            </form>
          </div>
        </div>

        {/* OVERLAY */}
        <div
          className={`absolute top-0 left-0 h-full w-1/2 flex items-center justify-center
          bg-linear-to-r from-cyan-400 to-lime-500 text-white text-center px-10
          transition-transform duration-500 z-20
          ${isSignUp ? "translate-x-full" : ""}`}
        >
          {isSignUp ? (
            <div>
              <h2 className="text-2xl font-bold mb-4">Welcome Back!</h2>
              <p className="mb-6">Already have an account?</p>
              <button
                onClick={() => {
                  setIsSignUp(false);
                  setSignupError("");
                }}
                className="border px-6 py-2 rounded-lg hover:bg-white hover:text-black transition"
              >
                Sign In
              </button>
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-bold mb-4">New Here?</h2>
              <p className="mb-6">Create an account to start using FireSafe.</p>
              <button
                onClick={() => {
                  setIsSignUp(true);
                  setLoginError("");
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
  );
}