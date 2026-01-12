import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import type { JSX } from "react";

type UserRole = {
  title: string;
  description: string;
  icon: JSX.Element;
  bgColor: string;
  iconColor: string;
};

const roles: UserRole[] = [
  {
    title: "User",
    description: "Registers complaints and tracks real-time status updates.",
    icon: <PersonOutlineOutlinedIcon fontSize="large" />,
    bgColor: "bg-blue-100",
    iconColor: "text-primary",
  },
  {
    title: "Admin",
    description: "Manages, assigns, and monitors complaints efficiently.",
    icon: <AdminPanelSettingsOutlinedIcon fontSize="large" />,
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    title: "Staff",
    description: "Resolves assigned complaints and updates resolution status.",
    icon: <SupportAgentOutlinedIcon fontSize="large" />,
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
  },
];

const UserRoles = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            System Users
          </h2>
          <p className="text-gray-600 text-lg">
            Different roles involved in the complaint management process
          </p>
        </div>

        {/* Role Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {roles.map((role) => (
            <div
              key={role.title}
              className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition text-center"
            >
              <div
                className={`w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full ${role.bgColor}`}
              >
                <span className={role.iconColor}>{role.icon}</span>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {role.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {role.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default UserRoles;
