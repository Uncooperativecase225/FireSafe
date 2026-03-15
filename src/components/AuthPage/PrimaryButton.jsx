import { FaSpinner } from "react-icons/fa";

export default function PrimaryButton({ loading, onClick }) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="
      w-full
      rounded-lg
      py-2
      font-medium
      bg-cyan-500
      text-white
      flex
      items-center
      justify-center
      gap-2
      hover:bg-cyan-600
      transition
      disabled:bg-gray-300
      "
    >
      {loading && (
        <FaSpinner className="animate-spin" />
      )}

      {loading ? "Signing In..." : "Sign In"}
    </button>
  );
}