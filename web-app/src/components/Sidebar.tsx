import { Link, useLocation } from "react-router-dom";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

type SidebarProps = {
    open: boolean;
    onClose: () => void;
};

const navItems = [
    {
        label: "Dashboard",
        path: "/dashboard",
        icon: <DashboardOutlinedIcon />,
    },
    {
        label: "My Complaints",
        path: "/complaints",
        icon: <AssignmentOutlinedIcon />,
    },
    {
        label: "New Complaint",
        path: "/complaints/new",
        icon: <AddCircleOutlineOutlinedIcon />,
    },
];

const Sidebar = ({ open, onClose }: SidebarProps) => {
    const location = useLocation();

    return (
        <>
            {/* Mobile overlay */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={onClose}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 h-full w-72 z-50 transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
            >
                <div className="h-full bg-white/70 backdrop-blur-2xl border-r border-gray-200 flex flex-col">

                    {/* Brand */}
                    <div className="px-6 py-6 border-b">
                        <h1 className="text-2xl font-extrabold tracking-tight text-primary">
                            RCMS
                        </h1>
                        <p className="text-xs text-gray-500 mt-1">
                            Real-Time Complaint System
                        </p>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 px-4 py-6 space-y-1">
                        {navItems.map((item) => {
                            const active = location.pathname === item.path;

                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    onClick={onClose}
                                    className={`group relative flex items-center gap-4 px-4 py-3 rounded-xl transition-all
                  ${active
                                            ? "bg-blue-50 text-primary font-semibold"
                                            : "text-gray-700 hover:bg-gray-100"
                                        }`}
                                >
                                    {/* Accent rail */}
                                    {active && (
                                        <span className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 rounded-r-full bg-primary"></span>
                                    )}

                                    <span
                                        className={`transition ${active ? "text-primary" : "text-gray-500 group-hover:text-primary"
                                            }`}
                                    >
                                        {item.icon}
                                    </span>

                                    <span className="text-sm">{item.label}</span>
                                </Link>
                            );
                        })}
                    </nav>

                    {/* User Card */}
                    <div className="px-4 pb-4">
                        <div className="rounded-2xl bg-linear-to-r from-blue-600 to-indigo-600 p-4 text-white shadow-lg">
                            <p className="text-sm font-medium">Logged in as</p>
                            <p className="text-lg font-semibold">User</p>

                            <button className="mt-4 flex items-center gap-2 text-sm opacity-90 hover:opacity-100">
                                <LogoutOutlinedIcon fontSize="small" />
                                Logout
                            </button>
                        </div>
                    </div>

                </div>
            </aside>
        </>
    );
};

export default Sidebar;
