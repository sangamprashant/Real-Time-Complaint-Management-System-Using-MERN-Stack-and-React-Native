import { Link } from "react-router-dom";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-primary text-white fixed top-0 w-full z-30 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-xl font-bold tracking-wide">
          RCMS
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/login" className="hover:underline">
            Login
          </Link>
          <Link
            to="/register"
            className="bg-white text-primary px-5 py-2 rounded-md hover:bg-gray-100 transition"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          {open ? <CloseOutlinedIcon /> : <MenuOutlinedIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-primary border-t border-blue-500">
          <div className="flex flex-col px-6 py-4 gap-4 text-sm">
            <Link to="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link to="/login" onClick={() => setOpen(false)}>
              Login
            </Link>
            <Link
              to="/register"
              onClick={() => setOpen(false)}
              className="bg-white text-primary px-4 py-2 rounded-md text-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
