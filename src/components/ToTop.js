import React, { useState } from "react";

export const ToTop = () => {
  const [visible, setVisible] = useState(false);

  window.addEventListener("scroll", () => {
    window.scrollY > 1000 ? setVisible(true) : setVisible(false);
  });

  return (
    <div
      className={`fixed flex items-center justify-center w-10 h-10 bg-teal-500 rounded-full bottom-8 right-8 transition-all ${
        visible
          ? "opacity-60 translate-y-0 cursor-pointer"
          : "opacity-0 translate-y-2 pointer-events-none"
      }`}
      onClick={() => window.scrollTo(0, 0)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="w-6 h-6 text-white"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4.5 15.75l7.5-7.5 7.5 7.5"
        />
      </svg>
    </div>
  );
};
