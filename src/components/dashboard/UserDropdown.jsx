import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { FiChevronDown } from "react-icons/fi";

export default function UserDropdown() {
  return (
    <Menu as="div" className="relative">

      {/* Button */}
      <MenuButton className="flex items-center gap-2 text-white font-medium">
        Ranit
        <FiChevronDown />
      </MenuButton>

      {/* Dropdown */}
      <MenuItems
        anchor="bottom end"
        className="mt-2 w-44 rounded-lg bg-white shadow-lg border p-1"
      >

        <MenuItem>
          {({ focus }) => (
            <button
              className={`block w-full text-left px-3 py-2 rounded ${
                focus ? "bg-gray-100" : ""
              }`}
            >
              Profile
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
              Emergency Contacts
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
              Settings
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
              Logout
            </button>
          )}
        </MenuItem>

      </MenuItems>

    </Menu>
  );
}