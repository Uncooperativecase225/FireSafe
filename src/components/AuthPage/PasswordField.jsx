import { useState } from "react";
import { FiEye, FiEyeOff, FiLock } from "react-icons/fi";

export default function PasswordField({ label }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">
        {label}
      </label>

      <div
        className="
        flex
        items-center
        border
        rounded-lg
        px-3
        py-2
        focus-within:ring-2
        focus-within:ring-cyan-400
        "
      >
        <FiLock className="text-gray-400 mr-2" />

        <input
          type={visible ? "text" : "password"}
          placeholder="Enter your password"
          className="w-full outline-none"
        />

        <button
          type="button"
          onClick={() => setVisible(!visible)}
        >
          {visible ? <FiEyeOff /> : <FiEye />}
        </button>
      </div>
    </div>
  );
}