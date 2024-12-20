import { Link } from "react-router-dom";
import { navbarItems } from "../data/navbar";

const Navbar = () => {
  return (
    <header>
      {/* Announcement Bar */}
      <div className="bg-redTheme text-center py-2 font-bold text-white overflow-hidden">
        <div className="whitespace-nowrap animate-move">
          Announcements: Admission 2025 Open for Queries or Telephonic
          Counseling call +91 5783921999
        </div>
      </div>

      {/* Navbar */}
      <nav className=" bg-white text-greenTheme flex items-center justify-between px-6 py-4 shadow-md ">
        {/* Logo */}
        <Link to="/" className="logo">
          <img
            src="https://www.niilmuniversity.ac.in/web/assets/img/logo.png"
            alt="Medhavi Skills University"
            className="h-12"
          />
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-6 items-center">
          {navbarItems.map((item, index) => (
            <li key={index} className="relative group">
              <Link className="px-4 py-2 border border-greenTheme rounded hover:bg-greenTheme hover:text-white transition">
                {item.label}
              </Link>
              <div className="absolute hidden group-hover:block bg-white text-greenTheme shadow-lg rounded mt-2 py-2 w-64 z-20">
                {item.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    to={link.href}
                    className="block px-4 py-2 hover:bg-gray-100 text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </li>
          ))}

          {/* Apply Now Button */}
          <li>
            <Link
              to="/"
              className="bg-greenTheme text-white px-4 py-2 rounded hover:bg-red-700"
            >
              APPLY NOW
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
