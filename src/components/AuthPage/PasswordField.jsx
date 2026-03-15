import { useState } from "react";
import { FiLock, FiEye, FiEyeOff } from "react-icons/fi";

export default function PasswordField({
  label,
  id,
  placeholder,
  value,
  onChange
}) {

  const [visible, setVisible] = useState(false);

  return (
    <div className="flex flex-col gap-1 w-full">

      <label
        htmlFor={id}
        className="text-sm font-medium text-gray-700"
      >
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
        transition
        "
      >

        <FiLock className="text-gray-400 mr-2" />

        <input
          id={id}
          type={visible ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full outline-none bg-transparent"
        />

        <button
          type="button"
          onClick={() => setVisible(!visible)}
          className="text-gray-500"
        >
          {visible ? <FiEyeOff /> : <FiEye />}
        </button>

      </div>

    </div>
  );
}