import { motion } from "framer-motion";

export default function Gauge({ value }) {
  const size = 180;
  const stroke = 18;
  const radius = size / 2;
  const normalizedRadius = radius - stroke;
  const circumference = Math.PI * normalizedRadius;

  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="flex justify-center">
      <svg width={size} height={size / 2 + 20}>

        {/* Gradient */}
        <defs>
          <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="50%" stopColor="#facc15" />
            <stop offset="100%" stopColor="#ef4444" />
          </linearGradient>
        </defs>

        {/* Background Arc */}
        <path
          d={`M ${stroke} ${radius}
              A ${normalizedRadius} ${normalizedRadius} 0 0 1 ${size - stroke} ${radius}`}
          fill="transparent"
          stroke="#e5e7eb"
          strokeWidth={stroke}
          strokeLinecap="round"
        />

        {/* Animated Foreground Arc */}
        <motion.path
          d={`M ${stroke} ${radius}
              A ${normalizedRadius} ${normalizedRadius} 0 0 1 ${size - stroke} ${radius}`}
          fill="transparent"
          stroke="url(#gaugeGradient)"
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />

        {/* 🔥 VALUE INSIDE GAUGE */}
        <text
          x="50%"
          y={radius - 10}
          textAnchor="middle"
          className="fill-gray-800 text-3xl font-bold"
        >
          {value}
        </text>

      </svg>
    </div>
  );
}