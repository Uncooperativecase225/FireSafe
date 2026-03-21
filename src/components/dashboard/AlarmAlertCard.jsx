import { motion } from "framer-motion";

export default function AlarmAlertCard({ active }) {
  return (
    <div
      className={`w-full h-20 flex items-center justify-between px-6
      rounded-2xl border shadow transition-all duration-300
      ${
        active
          ? "bg-red-50 border-red-300 shadow-red-300/40"
          : "bg-white border-gray-200"
      }`}
    >
      {/* ICON */}
      <motion.div
        animate={active ? { rotate: [0, -10, 10, -10, 0] } : {}}
        transition={{ repeat: Infinity, duration: 0.6 }}
        className={`text-2xl ${
          active
            ? "drop-shadow-[0_0_10px_rgba(239,68,68,0.9)]"
            : ""
        }`}
      >
        🔔
      </motion.div>

      {/* STATUS */}
      <div className="flex-1 text-center">
        <div className="text-xs opacity-60">Alarm</div>
        <div className="text-base font-semibold">
          {active ? "ON" : "OFF"}
        </div>
      </div>

      {/* DOT */}
      <div
        className={`w-3 h-3 rounded-full ${
          active ? "bg-red-500" : "bg-green-500"
        }`}
      />
    </div>
  );
}