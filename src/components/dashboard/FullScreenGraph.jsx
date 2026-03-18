import { motion } from "framer-motion"
import {
  LineChart,
  Line,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts"

const data = [
  { name: "1", v: 10 },
  { name: "2", v: 20 },
  { name: "3", v: 30 },
  { name: "4", v: 25 },
  { name: "5", v: 40 }
]

export default function FullScreenGraph({ id, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >

      {/* EXPANDING CONTAINER */}
      <motion.div
        layoutId={`graph-${id}`}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 20
        }}
        className="bg-white w-[90%] h-[80%] rounded-xl shadow-xl p-6 relative"
      >

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="
            absolute top-4 right-4 z-50
            bg-white/90 backdrop-blur
            px-3 py-1 rounded-md shadow
            hover:bg-gray-100 transition
          "
        >
          ✕
        </button>

        {/* TITLE */}
        <h2 className="text-lg font-semibold mb-4">
          Sensor Data
        </h2>

        {/* GRAPH */}
        <ResponsiveContainer width="100%" height="90%">
          <LineChart data={data}>

            {/* X Axis */}
            <XAxis dataKey="name" />

            {/* Tooltip */}
            <Tooltip />

            {/* Bar Graph */}
            <Bar
              dataKey="v"
              fill="#93c5fd"
              radius={[4, 4, 0, 0]}
            />

            {/* Line Graph */}
            <Line
              dataKey="v"
              stroke="#2563eb"
              strokeWidth={3}
              dot={false}
            />

          </LineChart>
        </ResponsiveContainer>

      </motion.div>

    </motion.div>
  )
}