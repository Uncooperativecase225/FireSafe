import { Menu, MenuButton, MenuItems, MenuItem, Transition } from "@headlessui/react";
import { FiChevronDown } from "react-icons/fi";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom"
import { logout } from "../../utils/tokenService"

export default function UserDropdown() {
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate("/")
  }

  return (
    <Menu as="div" className="relative">

      {/* User Button */}
      <MenuButton className="flex items-center gap-2 text-white font-medium">
        Ranit
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

        {/* Menu */}
        <MenuItems
          anchor="bottom end"
          className="
          absolute
          mt-2
          w-44
          rounded-xl
          bg-white/80
          backdrop-blur-md
          shadow-lg
          p-1
          "
        >

          <MenuItem>
            {({ focus }) => (
              <button
                className={`block w-full text-left px-3 py-2 rounded-md text-sm ${
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
                className={`block w-full text-left px-3 py-2 rounded-md text-sm ${
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
                className={`block w-full text-left px-3 py-2 rounded-md text-sm ${
                  focus ? "bg-gray-100" : ""
                }`}
              >
                Settings
              </button>
            )}
          </MenuItem>

          <div className="border-t my-1"></div>

          <MenuItem>
            {({ focus }) => (
              <button
                className={`block w-full text-left px-3 py-2 rounded-md text-sm text-red-500 ${
                  focus ? "bg-red-50" : ""
                }`}
                onClick={handleLogout}
              >
                Logout
              </button>
            )}
          </MenuItem>

        </MenuItems>

      </Transition>

    </Menu>
  );
}