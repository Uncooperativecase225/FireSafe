import { motion } from "framer-motion";

export default function TopBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="
      w-full
      bg-linear-to-r
      from-cyan-400
      to-lime-500
      py-4
      shadow-md
      "
    >
      <h1 className="text-center text-2xl font-bold text-white tracking-wide">
        FireSafe
      </h1>
    </motion.div>
  );
}