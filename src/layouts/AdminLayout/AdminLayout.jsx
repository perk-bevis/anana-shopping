import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import { useState } from 'react';
import Sidebar from './layouts/Sidebar/Sidebar';
import Topbar from './layouts/Topbar/Topbar';



const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <div className="min-h-screen flex bg-gray-50 text-gray-900">
      {/* SIDEBAR (desktop) */}
      <aside
        className={[
          "h-screen bg-white border-r shadow-sm transition-all duration-200 ease-in-out overflow-y-auto",
          sidebarOpen ? "w-72" : "w-20",
        ].join(" ")}
      >
        <Sidebar onToggle={() => setSidebarOpen((s) => !s)} collapsed={!sidebarOpen} />
      </aside>

      {/* MAIN */}
      <div className="flex min-h-screen flex-1 flex-col">
        <Topbar onToggleSidebar={() => setSidebarOpen((s) => !s)} />
        <main className="flex-1 p-6">
          {/* breadcrumb demo */}
          <ol className="mb-4 flex items-center gap-2 text-sm text-gray-500">
            <li>Home</li>
          </ol>

          <div className="rounded-lg border border-dashed p-10 text-center text-gray-400">
            Nội dung trang (Dashboard, bảng, biểu đồ…)
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default AdminLayout
