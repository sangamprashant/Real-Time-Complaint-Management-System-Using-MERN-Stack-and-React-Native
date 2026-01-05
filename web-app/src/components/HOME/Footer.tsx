import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-16">
            <div className="max-w-7xl mx-auto px-6">

                {/* Top Footer */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-gray-700">

                    {/* About */}
                    <div>
                        <h3 className="text-white text-xl font-semibold mb-4">
                            RCMS
                        </h3>
                        <p className="text-sm leading-relaxed">
                            Real-Time Complaint Management System is a digital platform
                            designed to register, track, and resolve complaints efficiently
                            with transparency and real-time updates.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">
                            Quick Links
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/" className="hover:text-white">Home</Link></li>
                            <li><Link to="/login" className="hover:text-white">Login</Link></li>
                            <li><Link to="/register" className="hover:text-white">Register</Link></li>
                            <li><Link to="/dashboard" className="hover:text-white">Dashboard</Link></li>
                        </ul>
                    </div>

                    {/* System Modules */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">
                            System Modules
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li>User Complaint Module</li>
                            <li>Admin Management</li>
                            <li>Staff Resolution</li>
                            <li>Real-Time Notifications</li>
                            <li>Reports & Analytics</li>
                        </ul>
                    </div>

                    {/* Contact / Project Info */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">
                            Project Info
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li>MCA Final Year Project</li>
                            <li>Technology: MERN + React Native</li>
                            <li>University: BBD University</li>
                            <li>Session: 2025-2026</li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Footer */}
                <div className="py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
                    <p>
                        © {new Date().getFullYear()} Real-Time Complaint Management System.
                        All rights reserved.
                    </p>

                    <p className="mt-2 md:mt-0">
                        Designed & Developed by <span className="text-white font-medium">Prashant Srivastav</span>
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
