import React from "react";

const Topbar = ({ onToggleSidebar }) => (
  <header className="sticky top-0 z-20 flex h-14 items-center justify-between border-b bg-white px-6">
    {/* Left */}
    <div className="flex items-center gap-3">
      <button
        className="inline-flex h-9 w-9 items-center justify-center rounded-md border text-xl leading-none hover:bg-gray-50"
        onClick={onToggleSidebar}
        aria-label="Mở/đóng menu"
      >
        ☰
      </button>

      <div className="w-64">
        <input
          className="w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-gray-200"
          type="text"
          placeholder="Tìm kiếm…"
          aria-label="Tìm kiếm"
        />
      </div>
    </div>

    {/* Right */}
    <div className="flex items-center gap-6">
      <a
        className="text-sm text-blue-600 hover:underline"
        href="#"
        target="_blank"
        rel="noopener"
      >
        Trang web bán quần áo
      </a>
    </div>
  </header>
);

export default Topbar;
