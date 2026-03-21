import { motion } from "framer-motion"
import {
  LineChart,
  Line,
  Bar,
  ResponsiveContainer
} from "recharts"

const data = [
  { v: 10 }, { v: 20 }, { v: 30 }, { v: 25 }, { v: 40 }
]

export default function MiniGraph({ id }) {
  return (
    <motion.div
      layoutId={`graph-${id}`}
      className="w-full h-28 mb-3"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          
          {/* Bar graph */}
          <Bar dataKey="v" fill="#93c5fd" />

          {/* Line graph */}
          <Line
            dataKey="v"
            stroke="#2563eb"
            strokeWidth={2}
            dot={false}
          />

        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  )
}