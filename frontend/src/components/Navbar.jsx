import { Link } from "react-router-dom";

const Navbar = () => {
  const menuItems = [
    {
      label: "About",
      links: [
        { label: "Overview", href: "#" },
        { label: "Mission & Vision", href: "#" },
        { label: "Leadership", href: "#" },
      ],
    },
    {
      label: "Admissions",
      links: [
        { label: "Undergraduate - Campus Programmes", href: "#" },
        { label: "Postgraduate - Campus Programmes", href: "#" },
        { label: "Work Integrated Programmes", href: "#" },
        { label: "Admission Process", href: "#" },
        { label: "Scholarship Financial Aid", href: "#" },
        { label: "Prospectus-2024", href: "#" },
        { label: "Eligibility Selection Criterion", href: "#" },
        { label: "Fee Structure 2024-2025", href: "#" },
        { label: "Fee Refund Policy", href: "#" },
      ],
    },
    {
      label: "Schools",
      links: [
        { label: "School of Engineering", href: "/schools/school-of-health-science-&-technology" },
        { label: "School of Management", href: "/schools/school-of-computer-science-&-engineering" },
        { label: "School of Arts & Science", href: "#" },
      ],
    },
    {
      label: "Collaborations",
      links: [
        { label: "Industry Partners", href: "#" },
        { label: "International Tie-Ups", href: "#" },
        { label: "Research Collaborations", href: "#" },
      ],
    },
    {
      label: "Life at NIILM",
      links: [
        { label: "Campus Life", href: "#" },
        { label: "Student Clubs", href: "#" },
        { label: "Events", href: "#" },
      ],
    },
    {
      label: "Happenings",
      links: [
        { label: "News", href: "#" },
        { label: "Announcements", href: "#" },
        { label: "Blogs", href: "#" },
      ],
    },
  ];

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
        <div className="logo">
          <img
            src="https://www.niilmuniversity.ac.in/web/assets/img/logo.png"
            alt="Medhavi Skills University"
            className="h-12"
          />
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 items-center">
          {menuItems.map((item, index) => (
            <li key={index} className="relative group">
              <a
                href="#"
                className="px-4 py-2 border border-greenTheme rounded hover:bg-greenTheme hover:text-white transition"
              >
                {item.label}
              </a>
              <div className="absolute hidden group-hover:block bg-white text-greenTheme shadow-lg rounded mt-2 py-2 w-64 z-20">
                {item.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    href={link.href}
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
            <a
              href="#"
              className="bg-greenTheme text-white px-4 py-2 rounded hover:bg-red-700"
            >
              APPLY NOW
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
