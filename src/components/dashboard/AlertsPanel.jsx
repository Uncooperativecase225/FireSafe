import FireAlertCard from "./FireAlertCard";
import GasAlertCard from "./GasAlertCard";
import AlarmAlertCard from "./AlarmAlertCard";
import SprinklerAlertCard from "./SprinklerAlertCard";

export default function AlertsPanel({ data }) {
  return (
    <div className="mt-6 space-y-4">

      {/* ROW 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FireAlertCard fire={data.fire} />
        <GasAlertCard lpg={data.lpg} />
      </div>

      {/* ROW 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AlarmAlertCard active={data.alarm} />
        <SprinklerAlertCard active={data.sprinkler} />
      </div>

    </div>
  );
}