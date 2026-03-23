import { LayoutGroup } from "framer-motion";
import SensorCard from "../components/dashboard/SensorCard";
import TopBar from "../components/dashboard/TopBar";
import AlertsPanel from "../components/dashboard/AlertsPanel";
import { computeSystemState } from "../utils/systemLogic";

export default function Dashboard() {
  const baseData = {
    temperature: 45,
    lpg: 60,
    gas: 25,
    fire: false,
  };

  const systemState = computeSystemState(baseData);

  const sensorData = {
    ...baseData,
    ...systemState,
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <TopBar />

      <LayoutGroup>
        <div className="p-6 space-y-6">

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            <SensorCard title="Temperature" value={sensorData.temperature} />
            <SensorCard title="LPG" value={sensorData.lpg} />
            <SensorCard title="Toxic Gas" value={sensorData.gas} />
          </div>

          <AlertsPanel data={sensorData} />

        </div>
      </LayoutGroup>
    </div>
  );
}