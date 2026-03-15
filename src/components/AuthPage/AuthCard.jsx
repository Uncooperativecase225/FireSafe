import { useState } from "react";
import { FiMail } from "react-icons/fi";

import InputField from "./InputField";
import PasswordField from "./PasswordField";
import PrimaryButton from "./PrimaryButton";
import GoogleButton from "./GoogleButton";
import Divider from "./Divider";
import SignupLink from "./SignupLink";

export default function AuthCard() {

  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div
      className="
      backdrop-blur-md
      bg-white/80
      shadow-xl
      rounded-xl
      p-8
      w-full
      max-w-md
      flex
      flex-col
      gap-5
      "
    >
      <h2 className="text-2xl font-semibold text-center">
        Login to FireSafe
      </h2>

      <InputField
        label="Email Address"
        type="email"
        placeholder="Enter your email"
        icon={FiMail}
      />

      <PasswordField label="Password" />

      <PrimaryButton
        loading={loading}
        onClick={handleLogin}
      />

      <Divider />

      <GoogleButton />

      <SignupLink />
    </div>
  );
}