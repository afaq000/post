import React, { useState, useRef, useEffect } from "react";

function Dropdown({ label = "Dropdown" }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeDropdown);
    return () => document.removeEventListener("mousedown", closeDropdown);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-center w-full text-xs gradient-background font-medium rounded-md focus:outline-none"
      >
        <div className="flex justify-center gap-5 items-center border-b-[1px] border-[#0C95C166] ">
          {label}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="7"
            viewBox="0 0 15 7"
            fill="none"
          >
            <path
              d="M7.5 7L0.5 0H14.5L7.5 7Z"
              fill="url(#paint0_angular_386_6295)"
            />
            <defs>
              <radialGradient
                id="paint0_angular_386_6295"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(3.59237 3.5) rotate(-31.972) scale(6.60995 2.38695)"
              >
                <stop stopColor="#0C95C1" />
                <stop offset="0.736176" stopColor="#075B75" />
                <stop offset="0.852701" stopColor="#07526A" />
                <stop offset="1" stopColor="#06465B" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </button>

      {isOpen && (
        <div className="absolute right-0 z-20 mt-2 w-[100px] bg-[#99E8FB] border border-gray-200 rounded-md shadow-lg">
          <ul className="py-1 text-gray-700">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Option 1
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Option 2
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Option 3
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
