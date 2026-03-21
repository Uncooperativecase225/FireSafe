import { motion } from "framer-motion";

export default function FireAlertCard({ fire }) {
  const isActive = fire === true;

  return (
    <div
  className={`w-full h-20 flex items-center justify-between px-6
  rounded-2xl border shadow transition-all duration-300
  ${fire ? "bg-red-50 border-red-300 shadow-red-300/40" : "bg-white border-gray-200"}`}
>
      {/* LEFT: ICON */}
      <motion.div
        animate={{ scale: isActive ? [1, 1.2, 1] : 1 }}
        transition={{ repeat: Infinity, duration: 1 }}
        className="text-2xl"
      >
        🔥
      </motion.div>

      {/* CENTER: STATUS */}
      <div className="flex-1 text-center">
        <div className="text-xs text-gray-500">Fire Status</div>
        <div className="text-base font-semibold">
          {isActive ? "FIRE DETECTED" : "No Fire"}
        </div>
      </div>

      {/* RIGHT: DOT */}
      <div className="flex items-center gap-2">
        <div
          className={`w-3 h-3 rounded-full ${
            isActive ? "bg-red-500" : "bg-green-500"
          }`}
        />
      </div>
    </div>
  );
}