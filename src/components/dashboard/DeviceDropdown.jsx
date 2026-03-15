import { Menu, MenuButton, MenuItems, MenuItem, Transition } from "@headlessui/react";
import { FiChevronDown } from "react-icons/fi";
import { Fragment } from "react";

export default function DeviceDropdown() {

  const devices = [
    "Kitchen Detector",
    "Garage Detector",
    "Living Room Detector"
  ];

  return (
    <Menu as="div" className="relative">

      {/* Device Selector Button */}
      <MenuButton className="flex items-center gap-2 text-white font-medium">
        Kitchen Detector
        <FiChevronDown size={18} />
      </MenuButton>

      {/* Dropdown Animation */}
      <Transition
        as={Fragment}
        enter="transition ease-out duration-150"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >

        {/* Dropdown Menu */}
        <MenuItems
          anchor="bottom start"
          className="
          absolute
          mt-2
          w-56
          rounded-xl
          bg-white/80
          backdrop-blur-md
          shadow-lg
          p-1
          "
        >

          {/* Switch Device Section */}
          <div className="px-3 py-2 text-xs text-gray-500 uppercase">
            Switch Device
          </div>

          {devices.map((device) => (
            <MenuItem key={device}>
              {({ focus }) => (
                <button
                  className={`
                  block
                  w-full
                  text-left
                  px-3
                  py-2
                  rounded-md
                  text-sm
                  ${focus ? "bg-gray-100" : ""}
                  `}
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
                className={`
                block w-full text-left px-3 py-2 rounded-md text-sm
                ${focus ? "bg-gray-100" : ""}
                `}
              >
                Device Settings
              </button>
            )}
          </MenuItem>

          <MenuItem>
            {({ focus }) => (
              <button
                className={`
                block w-full text-left px-3 py-2 rounded-md text-sm
                ${focus ? "bg-gray-100" : ""}
                `}
              >
                Device Location
              </button>
            )}
          </MenuItem>

          <MenuItem>
            {({ focus }) => (
              <button
                className={`
                block w-full text-left px-3 py-2 rounded-md text-sm
                ${focus ? "bg-gray-100" : ""}
                `}
              >
                Device Status
              </button>
            )}
          </MenuItem>

          <MenuItem>
            {({ focus }) => (
              <button
                className={`
                block w-full text-left px-3 py-2 rounded-md text-sm text-red-500
                ${focus ? "bg-red-50" : ""}
                `}
              >
                Remove Device
              </button>
            )}
          </MenuItem>

        </MenuItems>

      </Transition>

    </Menu>
  );
}