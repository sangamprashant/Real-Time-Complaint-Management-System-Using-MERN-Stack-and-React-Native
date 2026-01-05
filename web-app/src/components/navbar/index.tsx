import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-primary text-white shadow-md fixed w-full z-30">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo / Title */}
                <h1 className="text-xl font-bold">
                    <Link to="/">RCMS</Link>
                </h1>

                {/* Menu */}
                <div className="flex items-center gap-6 text-sm font-medium">
                    <Link to="/dashboard" className="hover:underline">
                        Dashboard
                    </Link>
                    <Link to="/complaints" className="hover:underline">
                        Complaints
                    </Link>
                    <Link to="/profile" className="hover:underline">
                        Profile
                    </Link>
                    <button className="bg-white text-primary px-4 py-1 rounded-md hover:bg-gray-100">
                        Logout
                    </button>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
