import { FaSpinner } from "react-icons/fa";

export default function PrimaryButton({
  loading,
  disabled,
  children,
  loadingText = "Processing...",
}) {
  return (
    <button
      type="submit"
      disabled={loading || disabled}
      className="
        w-full flex items-center justify-center gap-2
        rounded-lg py-2 font-medium
        text-white bg-cyan-500 hover:bg-cyan-600
        transition
        disabled:bg-gray-300 disabled:cursor-not-allowed
      "
    >
      {loading ? (
        <>
          <FaSpinner className="animate-spin text-white" size={16} />
          {loadingText}
        </>
      ) : (
        children
      )}
    </button>
  );
}