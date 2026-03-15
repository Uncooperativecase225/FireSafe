import { FcGoogle } from "react-icons/fc";

export default function GoogleButton() {
  return (
    <button
      className="
      w-full
      border
      rounded-lg
      py-2
      flex
      items-center
      justify-center
      gap-3
      hover:bg-gray-50
      transition
      "
    >
      <FcGoogle size={20} />

      Continue with Google
    </button>
  );
}