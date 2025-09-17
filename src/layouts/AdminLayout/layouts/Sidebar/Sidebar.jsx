import { House } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

// const navItem = [
//     {
//         to: "/",
//         title: "Home",
//     },
//     {
//         to: "/news",
//         title: "News",
//     },
//     {
//         to: "/contact",
//         title: "Contact",
//     },
//     {
//         to: "/use-state",
//         title: "UseState",
//     },
// ]

const Sidebar = ({ collapsed }) => (
  <div className="flex h-full flex-col">
    {/* Brand */}
    <div className="flex items-center gap-3 border-b px-3 py-3">
      {!collapsed && <span className="font-semibold">anana shopping</span>}
    </div>

    {/* User card */}
    <div className="flex items-center gap-3 border-b px-3 py-4">
      <img
        src="/assets/img/avatar.jpg"
        alt="Nguyễn Sơn"
        className="h-10 w-10 rounded-full object-cover"
      />
      {!collapsed && (
        <div className="leading-tight">
          <div className="text-xs text-gray-500">Welcome,</div>
          <div className="text-sm font-medium">Nguyễn Sơn</div>
        </div>
      )}
    </div>

    <nav className="flex-1 px-3 py-3 text-sm">
      <ul className="space-y-1">
        {/* Home */}
        <li>
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              [
                "flex items-center gap-3 rounded-md px-3 py-2 transition-colors",
                isActive
                  ? "bg-gray-100 text-gray-900 font-medium"
                  : "text-gray-600 hover:bg-gray-50",
              ].join(" ")
            }
          >
            <House className="h-4 w-4" />
            {!collapsed && <span>Home</span>}
          </NavLink>
        </li>

        {/* Quản lý */}
        <li className="mt-3 text-xs font-semibold text-gray-400">
          {!collapsed && "Quản lý"}
        </li>
        <li>
          <NavLink
            to="/admin/staff"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-3 rounded-md px-3 py-2 bg-gray-100 text-gray-900"
                : "flex items-center gap-3 rounded-md px-3 py-2 text-gray-600 hover:bg-gray-50"
            }
          >
            👥 {!collapsed && "Quản lý nhân viên"}
          </NavLink>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-600 hover:bg-gray-50"
          >
            📦 {!collapsed && "Quản lý hàng"}
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-600 hover:bg-gray-50"
          >
            🧑‍💼 {!collapsed && "Quản lý khách"}
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-600 hover:bg-gray-50"
          >
            🧾 {!collapsed && "Quản lý hóa đơn"}
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-600 hover:bg-gray-50"
          >
            🧱 {!collapsed && "Quản lý chất liệu"}
          </a>
        </li>

        {/* Báo cáo */}
        <li className="mt-3 text-xs font-semibold text-gray-400">
          {!collapsed && "Báo cáo"}
        </li>
        <li>
          <a
            href="#"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-600 hover:bg-gray-50"
          >
            📊 {!collapsed && "Doanh thu"}
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-600 hover:bg-gray-50"
          >
            🏷️ {!collapsed && "Kho & tồn"}
          </a>
        </li>

        {/* Tài khoản */}
        <li className="mt-3 text-xs font-semibold text-gray-400">
          {!collapsed && "Tài khoản"}
        </li>
        <li>
          <a
            href="#"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-600 hover:bg-gray-50"
          >
            👤 {!collapsed && "Hồ sơ"}
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-600 hover:bg-gray-50"
          >
            🔒 {!collapsed && "Đổi mật khẩu"}
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-600 hover:bg-gray-50"
          >
            🚪 {!collapsed && "Đăng xuất"}
          </a>
        </li>
      </ul>
    </nav>
  </div>
);

export default Sidebar;

