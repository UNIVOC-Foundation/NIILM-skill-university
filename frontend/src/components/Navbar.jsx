import { Link } from "react-router-dom";
import { navbarItems } from "../data/navbar";
import { useState } from "react";

const Navbar = () => {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

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

     
      <nav className="bg-white text-greenTheme flex items-center justify-between px-6 py-4 shadow-md">
       
        <Link to="/" className="logo">
          <img
            src="https://www.niilmuniversity.ac.in/web/assets/img/logo.png"
            alt="Medhavi Skills University"
            className="h-12"
          />
        </Link>

        
        <ul className="flex space-x-6 items-center">
          {navbarItems.map((item, index) => (
            <li key={index} className="relative group">
              <Link
                to={item.href || "#"}
                className="px-4 py-2 border border-greenTheme rounded hover:bg-greenTheme hover:text-white transition"
              >
                {item.label}
              </Link>

              
              {item.links && (
                <div className="absolute hidden group-hover:block bg-white text-greenTheme shadow-lg rounded mt-2 py-2 w-64 z-20">
                  {item.links.map((link, linkIndex) => {
                    if (link.label === "Resources") {
                      return (
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
                                <a
                                  key={subIndex}
                                  href={subLink.href}
                                  className="block px-4 py-2 hover:bg-gray-100 text-sm"
                                >
                                  {subLink.label}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    }

                    return (
                      <a
                        key={linkIndex}
                        href={link.href}
                        className="block px-4 py-2 hover:bg-gray-100 text-sm"
                      >
                        {link.label}
                      </a>
                    );
                  })}
                </div>
              )}
            </li>
          ))}

          
          <li>
            <Link
              to="/apply"
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
