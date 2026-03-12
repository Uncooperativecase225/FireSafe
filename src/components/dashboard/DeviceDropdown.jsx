import { Menu, MenuButton, MenuItems, MenuItem} from "@headlessui/react";
import { FiChevronDown } from "react-icons/fi";

export default function DeviceDropdown() {

  const devices = [
    "Kitchen Detector",
    "Garage Detector",
    "Living Room Detector"
  ];

  return (
    <Menu as="div" className="relative">

      {/* Device Button */}
      <MenuButton className="flex items-center gap-2 text-white font-medium">
        Kitchen Detector
        <FiChevronDown />
      </MenuButton>

      {/* Dropdown Menu */}
      <MenuItems
        anchor="bottom start"
        className="mt-2 w-52 rounded-lg bg-white shadow-lg border p-1"
      >

        {/* Switch Device Label */}
        <div className="px-3 py-2 text-xs text-gray-500 uppercase">
          Switch Device
        </div>

        {devices.map((device) => (
          <MenuItem key={device}>
            {({ focus }) => (
              <button
                className={`block w-full text-left px-3 py-2 rounded ${
                  focus ? "bg-gray-100" : ""
                }`}
              >
                {device}
              </button>
            )}
          </MenuItem>
        ))}

        <div className="border-t my-1"></div>

        <MenuItem>
          {({ focus }) => (
            <button
              className={`block w-full text-left px-3 py-2 rounded ${
                focus ? "bg-gray-100" : ""
              }`}
            >
              Device Settings
            </button>
          )}
        </MenuItem>

        <MenuItem>
          {({ focus }) => (
            <button
              className={`block w-full text-left px-3 py-2 rounded ${
                focus ? "bg-gray-100" : ""
              }`}
            >
              Device Location
            </button>
          )}
        </MenuItem>

        <MenuItem>
          {({ focus }) => (
            <button
              className={`block w-full text-left px-3 py-2 rounded ${
                focus ? "bg-gray-100" : ""
              }`}
            >
              Device Status
            </button>
          )}
        </MenuItem>

        <MenuItem>
          {({ focus }) => (
            <button
              className={`block w-full text-left px-3 py-2 rounded text-red-500 ${
                focus ? "bg-red-50" : ""
              }`}
            >
              Remove Device
            </button>
          )}
        </MenuItem>

      </MenuItems>

    </Menu>
  );
}