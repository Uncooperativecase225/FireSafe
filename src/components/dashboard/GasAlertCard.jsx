import { motion } from "framer-motion";

export default function GasAlertCard({ lpg }) {
  let status = "Safe";
  let level = "safe";

  if (lpg > 65) {
    status = "Gas Leak Detected";
    level = "danger";
  } else if (lpg > 40) {
    status = "Elevated Gas Level";
    level = "warning";
  }

  return (
    <div
      className={`w-full h-20 flex items-center justify-between px-6
      rounded-2xl border shadow transition-all duration-200
      ${getCardStyle(level)}`}
    >
      {/* ICON */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="text-2xl"
      >
        🧪
      </motion.div>

      {/* STATUS */}
      <div className="flex-1 text-center">
        <div className="text-xs opacity-60">Gas Status</div>
        <div className="text-base font-semibold">{status}</div>
      </div>

      {/* DOTS */}
      <div className="flex gap-2">
        <div className={`w-3 h-3 rounded-full ${lpg < 40 ? "bg-green-500" : "bg-gray-300"}`} />
        <div className={`w-3 h-3 rounded-full ${lpg >= 40 && lpg <= 65 ? "bg-yellow-400" : "bg-gray-300"}`} />
        <div className={`w-3 h-3 rounded-full ${lpg > 65 ? "bg-red-500" : "bg-gray-300"}`} />
      </div>
    </div>
  );
}

function getCardStyle(level) {
  switch (level) {
    case "danger":
      return "bg-red-50 border-red-200";

    case "warning":
      return "bg-yellow-50 border-yellow-200";

    default:
      return "bg-white border-gray-200";
  }
}