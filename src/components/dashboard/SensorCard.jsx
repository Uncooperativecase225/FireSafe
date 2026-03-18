import Gauge from "./Gauge"
import MiniGraph from "./MiniGraph"
import FullScreenGraph from "./FullScreenGraph"
import { useState } from "react"
import { AnimatePresence } from "framer-motion"

export default function SensorCard({ title, value }) {

  const [openGraph, setOpenGraph] = useState(false)

  const id = title.toLowerCase().replace(/\s/g, "")

  return (
    <>
      <div className="p-5 bg-white rounded-xl shadow flex flex-col items-center">

        <h2 className="font-semibold mb-3">{title}</h2>

        <Gauge value={value} />


        <div
          onClick={() => setOpenGraph(true)}
          className="w-full cursor-pointer"
        >
          <MiniGraph id={id} />
        </div>

      </div>

      <AnimatePresence>
        {openGraph && (
          <FullScreenGraph
            id={id}
            onClose={() => setOpenGraph(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}