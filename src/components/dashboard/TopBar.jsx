import DeviceDropdown from "./DeviceDropdown";
import UserDropdown from "./UserDropdown";

export default function TopBar() {
  return (
    <div className="w-full bg-linear-to-r from-cyan-400 to-lime-500 py-4 px-6 flex items-center justify-between shadow-md">

      <DeviceDropdown />

      <h1 className="text-white text-xl font-bold">
        FireSafe
      </h1>

      <UserDropdown />

    </div>
  );
}