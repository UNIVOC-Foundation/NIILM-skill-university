import { Link } from "react-router-dom";
import { navbarItems } from "../data/navbar";
import { useState } from "react";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const handleMouseEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleResources = () => {
    setIsResourcesOpen(!isResourcesOpen);
  };

  return (
    <header>
      <div className="bg-redTheme text-center py-2 font-bold text-white overflow-hidden">
        <div className="whitespace-nowrap animate-move">
          Announcements: Admission 2025 Open for Queries or Telephonic
          Counseling call +91 5783921999
        </div>
      </div>

      <nav className="bg-white text-greenTheme flex items-center justify-between px-6 py-4 shadow-md4">
        <Link to='/' className="logo">
          <img
            src="https://www.niilmuniversity.ac.in/web/assets/img/logo.png"
            alt="NIILM Skills University"
            className="h-16"
            width={200}
            height={80}
          />
        </Link>

        <ul className="flex space-x-6 items-center">
          {navbarItems.map((item, index) => (
            <li
              key={index}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/"
                className="px-4 py-2 border border-greenTheme rounded hover:bg-greenTheme hover:text-white transition"
              >
                {item.label}
              </Link>
              {activeDropdown === index && (
                <div className="absolute bg-white text-greenTheme shadow-lg rounded mt-2 py-2 w-64 z-20">
                  {item.links.map((link, linkIndex) =>
                    link.label === "Resources" ? (
                      <div key={linkIndex} className="relative">
                        <button
                          onClick={toggleResources}
                          className="block px-4 py-2 text-left w-full hover:bg-gray-100"
                        >
                          {link.label}
                        </button>
                        {isResourcesOpen && (
                          <div className="absolute bg-white text-greenTheme shadow-lg rounded mt-2 py-2 w-48">
                            {link.links.map((subLink, subIndex) => (
                              <Link
                                key={subIndex}
                                to={subLink.href}
                                className="block px-4 py-2 hover:bg-gray-100 text-sm"
                              >
                                {subLink.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        key={linkIndex}
                        to={link.href}
                        className="block px-4 py-2 hover:bg-gray-100 text-sm"
                      >
                        {link.label}
                      </Link>
                    )
                  )}
                </div>
              )}
            </li>
          ))}
          <li>
            <Link
              to="https://www.niilmuniversity.ac.in/application"
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
