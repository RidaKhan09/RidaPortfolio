import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/slices/authSlice";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-6 py-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          Rida<span className="text-pink-500">Dev</span>
        </Link>

        {/* Hamburger (Mobile) */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Links (Desktop) */}
        <div className="hidden md:flex gap-6">
          <Link to="/" className="hover:text-pink-400">Home</Link>
          <Link to="/about" className="hover:text-pink-400">About</Link>
          <Link to="/projects" className="hover:text-pink-400">Projects</Link>
          <Link to="/blog" className="hover:text-pink-400">Blog</Link>
          <Link to="/contact" className="hover:text-pink-400">Contact</Link>
        </div>

        {/* Auth (Desktop) */}
        <div className="hidden md:block">
          {user ? (
            <button
              onClick={() => dispatch(logout())}
              className="bg-pink-500 px-4 py-2 rounded-lg hover:bg-pink-600"
            >
              Logout
            </button>
          ) : (
            <Link
              to="Login"
              className="bg-pink-500 px-4 py-2 rounded-lg hover:bg-pink-600"
            >
              Admin
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4">
          <Link
            to="/"
            className="hover:text-pink-400"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-pink-400"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/projects"
            className="hover:text-pink-400"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="/blog"
            className="hover:text-pink-400"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="hover:text-pink-400"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>

          {/* Auth (Mobile) */}
          {user ? (
            <button
              onClick={() => {
                dispatch(logout());
                setIsOpen(false);
              }}
              className="bg-pink-500 px-4 py-2 rounded-lg hover:bg-pink-600"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/Login"
              onClick={() => setIsOpen(false)}
              className="bg-pink-500 px-4 py-2 rounded-lg hover:bg-pink-600"
            >
              Admin
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;

