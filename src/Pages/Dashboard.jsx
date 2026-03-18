import { LayoutGroup } from "framer-motion"
import SensorCard from "../components/dashboard/SensorCard"
import TopBar from "../components/dashboard/TopBar"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">

      <TopBar />

      <LayoutGroup>
        <div className="grid grid-cols-3 gap-6 p-6">

          <SensorCard title="Temperature" value={45} />
          <SensorCard title="LPG" value={60} />
          <SensorCard title="Toxic Gas" value={25} />

        </div>
      </LayoutGroup>

    </div>
  )
}