export default function Gauge({ value }) {
  const radius = 50
  const stroke = 10
  const normalizedRadius = radius - stroke * 2
  const circumference = normalizedRadius * Math.PI

  const strokeDashoffset =
    circumference - (value / 100) * circumference

  const getColor = () => {
    if (value < 30) return "#22c55e"
    if (value < 50) return "#eab308"
    if (value < 70) return "#f97316"
    return "#ef4444"
  }

  return (
    <div className="flex flex-col items-center">

      <svg height={radius} width={radius * 2}>
        {/* Background arc */}
        <path
          d={`M ${stroke} ${radius}
              A ${normalizedRadius} ${normalizedRadius} 0 0 1 ${radius * 2 - stroke} ${radius}`}
          fill="transparent"
          stroke="#e5e7eb"
          strokeWidth={stroke}
        />

        {/* Foreground arc */}
        <path
          d={`M ${stroke} ${radius}
              A ${normalizedRadius} ${normalizedRadius} 0 0 1 ${radius * 2 - stroke} ${radius}`}
          fill="transparent"
          stroke={getColor()}
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          style={{
            transition: "stroke-dashoffset 0.8s ease"
          }}
        />
      </svg>

      {/* SINGLE VALUE */}
      <div className="text-lg font-bold mt-1">
        {value}
      </div>

    </div>
  )
}