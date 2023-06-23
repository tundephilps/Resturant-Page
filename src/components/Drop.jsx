import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";

function Drop({ options }) {
  const [showOptions, setShowOptions] = useState(false);
  const handleClick = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div>
      <button class="nav_toggle" onClick={handleClick}>
        <span class="line line1"></span>
        <span class="line line2"></span>
        <span class="line line3"></span>
      </button>

      {showOptions && (
        <div
          className="absolute right-0 mt-[29px] w-[25rem] origin-top-right rounded-md bg-[#f8bd49] font-primary bg-eerie shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabindex="-1"
        >
          <div class="py-1" role="none">
            <a
              href="#Home"
              class="text-gray-700 block px-4 py-2 text-[3rem] hover:text-yellow-800"
              role="menuitem"
              tabindex="-1"
              id="menu-item-0"
            >
              Home
            </a>
            <a
              href="#About"
              class="text-gray-700 block px-4 py-2 text-[3rem]  hover:text-yellow-800"
              role="menuitem"
              tabindex="-1"
              id="menu-item-1"
            >
              About Us
            </a>
            <a
              href="#Menu"
              class="text-gray-700 block px-4 py-2 text-[3rem]  hover:text-yellow-800"
              role="menuitem"
              tabindex="-1"
              id="menu-item-2"
            >
              Menu
            </a>

            <a
              href="#Reservations"
              class="text-gray-700 block px-4 py-2 text-[3rem]  hover:text-yellow-800"
              role="menuitem"
              tabindex="-1"
              id="menu-item-2"
            >
              Reservations
            </a>
            <a
              href="#Contacts"
              class="text-gray-700 block px-4 py-2 text-[3rem]  hover:text-yellow-800"
              role="menuitem"
              tabindex="-1"
              id="menu-item-2"
            >
              Contacts
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Drop;
