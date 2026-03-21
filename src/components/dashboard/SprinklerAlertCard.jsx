import { motion } from "framer-motion";

export default function SprinklerAlertCard({ active }) {
  return (
    <div
      className={`w-full h-20 flex items-center justify-between px-6
      rounded-2xl border shadow transition-all duration-300
      ${
        active
          ? "bg-blue-50 border-blue-300 shadow-blue-300/40"
          : "bg-white border-gray-200"
      }`}
    >
      {/* ICON */}
      <motion.div
        animate={active ? { y: [0, 5, 0] } : {}}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className={`text-2xl ${
          active
            ? "drop-shadow-[0_0_10px_rgba(59,130,246,0.9)]"
            : ""
        }`}
      >
        💧
      </motion.div>

      {/* STATUS */}
      <div className="flex-1 text-center">
        <div className="text-xs opacity-60">Sprinkler</div>
        <div className="text-base font-semibold">
          {active ? "ON" : "OFF"}
        </div>
      </div>

      {/* DOT */}
      <div
        className={`w-3 h-3 rounded-full ${
          active ? "bg-blue-500" : "bg-gray-400"
        }`}
      />
    </div>
  );
}