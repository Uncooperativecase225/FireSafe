import Gauge from "./Gauge";
import MiniGraph from "./MiniGraph";
import FullScreenGraph from "./FullScreenGraph";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

export default function SensorCard({ title, value }) {
  const [openGraph, setOpenGraph] = useState(false);

  const id = title.toLowerCase().replace(/\s/g, "");

  return (
    <>
      <div className="h-110 p-5 bg-white rounded-xl shadow 
      flex flex-col">

        {/* TITLE */}
        <h2 className="font-semibold text-center text-lg opacity-70">
          {title}
        </h2>

        {/* GAUGE (dominant section) */}
        <div className="flex-1 flex items-center justify-center">
          <Gauge value={value} />
        </div>

        {/* GRAPH */}
        <div
          onClick={() => setOpenGraph(true)}
          className="w-full h-28 mt-4 cursor-pointer"
        >
          <MiniGraph id={id} />
        </div>
      </div>

      {/* FULLSCREEN GRAPH */}
      <AnimatePresence>
        {openGraph && (
          <FullScreenGraph
            id={id}
            onClose={() => setOpenGraph(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}