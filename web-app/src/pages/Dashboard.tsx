import { useState } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import PendingActionsOutlinedIcon from "@mui/icons-material/PendingActionsOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import Sidebar from "../components/Sidebar";

const stats = [
  {
    title: "Total Complaints",
    value: 12,
    icon: <TrendingUpOutlinedIcon />,
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "In Progress",
    value: 5,
    icon: <PendingActionsOutlinedIcon />,
    color: "from-yellow-400 to-orange-500",
  },
  {
    title: "Resolved",
    value: 7,
    icon: <TaskAltOutlinedIcon />,
    color: "from-green-500 to-emerald-600",
  },
];

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-linear-to-r from-gray-100 to-gray-50 flex">

      {/* Sidebar */}
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Area */}
      <div className="flex-1 lg:ml-72 flex flex-col">

        {/* TOP BAR */}
        <header className="sticky top-0 z-20 bg-white/70 backdrop-blur-xl border-b px-6 py-4 flex items-center justify-between">

          {/* Left */}
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden text-gray-700"
              onClick={() => setSidebarOpen(true)}
            >
              <MenuOutlinedIcon />
            </button>

            <div>
              <h1 className="text-xl font-semibold text-gray-800">
                Dashboard
              </h1>
              <p className="text-sm text-gray-500">
                Overview & activity summary
              </p>
            </div>
          </div>

          {/* Right */}
          <button className="relative text-gray-600 hover:text-primary">
            <NotificationsNoneOutlinedIcon />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
        </header>

        {/* CONTENT */}
        <main className="p-8 space-y-10">

          {/* STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.title}
                className="relative overflow-hidden rounded-2xl bg-white shadow-lg p-6"
              >
                <div
                  className={`absolute inset-0 bg-linear-to-r ${stat.color} opacity-10`}
                ></div>

                <div className="relative flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">{stat.title}</p>
                    <p className="text-4xl font-extrabold text-gray-800 mt-2">
                      {stat.value}
                    </p>
                  </div>

                  <div
                    className={`w-12 h-12 flex items-center justify-center rounded-xl bg-linear-to-r ${stat.color} text-white`}
                  >
                    {stat.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* PLACEHOLDER SECTIONS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow p-6 h-56">
              <h3 className="font-semibold text-gray-800 mb-2">
                Recent Complaints
              </h3>
              <p className="text-sm text-gray-500">
                Latest complaints submitted by you will appear here.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow p-6 h-56">
              <h3 className="font-semibold text-gray-800 mb-2">
                Complaint Activity
              </h3>
              <p className="text-sm text-gray-500">
                Status changes and updates timeline.
              </p>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
};

export default Dashboard;
