import React, { useState } from "react";

const Navbar = () => {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const toggleResources = () => {
    setIsResourcesOpen((prev) => !prev);
  };

  const menuItems = [
    {
      label: "About",
      links: [
        { label: "Why NIILM", href: "/pages/WhyNiilmPage" },
        { label: "Who We Are", href: "/who-we-are" },
        { label: "Leadership", href: "/pages/leadership" },
        { label: "Recognition", href: "/recognition" },
        { label: "Award", href: "Academics/AwardsPage" },
        { label: "Infrastructure", href: "/infrastructure" },
        {
          label: "Resources",
          links: [
            { label: "Reports", href: "/resources/reports" },
            { label: "Guidelines", href: "/resources/guidelines" },
          ],
        },
        { label: " NIILM UNIVERSITY", href: "/Niilmuniversity" },
        { label: "Administration", href: "/administration" },
        { label: "Our Faculty", href: "/our-faculty" },
        { label: "Central Facilities", href: "/central-facilities" },
      ],
    },
    {
      label: "Academic",
      links: [
        { label: "Skills In Higher Education", href: "/Academics/SkillsInHigherEducationPage" },
        { label: "We Believe", href: "/belief-section" },
        { label: "Learning EcoSystem", href: "/learning-ecosystem" },
        { label: "Design Your Own Degree", href: "/design-degree" },
        { label: "Learning With Industry", href: "/Academics/LearningWithIndustryPage" },
        { label: "Evaluation", href: "/evaluation" },
        { label: "Experts and Mentors", href: "/Academics/Experts" },
        { label: "Student Showcase", href: "/Academics/Student" },
        { label: "Nep Compliance", href: "/Academics/Nep" },
        { label: "Academic Bank of Credits", href: "/Academics/Abc" },
        { label: "Research and Development", href: "Rnd" },
        
      ],
    },
    {
      label: "Admissions",
      links: [
        { label: "Undergraduate - Campus Programmes", href: "Admissions/UndergraduatePage" },
        { label: "Postgraduate - Campus Programmes", href: "Admissions/PostraduatePage" },
        { label: "Admission Process", href: "Admissions/AdmissionProcessPage" },
        { label: "Scholarship Financial Aid", href: "Admissions/Scholorship" },
        { label: "Eligibility Selection Criterion", href: "Admissions/EligibilityPage" },
        
      ],
    },
    {
      label: "Schools",
      links: [
        { label: "School of Engineering", href: "/pages/SchoolsPage" },
        { label: "School of Management", href: "/pages/SchoolsPage" },
        { label: "School of Arts & Science", href: "/pages/SchoolsPage" },
      ],
    },
    {
      label: "Collaborations",
      links: [
        { label: "Industry Partners", href: "pages/IndustrySection" },
        { label: "Skilling", href: "pages/SkillingPage" },
        { label: "Technology", href: "/pages/Technology" },
      ],
    },
    {
      label: "Life at NIILM",
      links: [
        { label: "Culture", href: "/Life/Culture" },
        { label: "Happy Faces", href: "/Life/Happy" },
        { label: "NSS", href: "/Life/NSS" },
        { label: "Sports", href: "/Life/Sports" },
        { label: "SEDG", href: "/Life/SEDG" }
      ],
    },
    {
      label: "Happenings",
      links: [
        { label: "News", href: "Happening/News" },
        { label: "Circulars", href: "Happening/Circulars" },
        { label: "Blogs", href: "Happening/Blogs" },
        { label: "Media", href: "Happening/Media" },
        { label: "News Letters", href: "Happening/NewsLetter" },
      ],
    },
    {
      label :"UtilityNav",
      links: [
        { label : "CAMPUS LOGIN", href: '/campus-login' },
        { label : "PAY FEE", href: '/pay-fee' },

      ]
    }
  
  ];

  return (
    <header>
      <div className="bg-redTheme text-center py-2 font-bold text-white overflow-hidden">
        <div className="whitespace-nowrap animate-move">
          Announcements: Admission 2025 Open for Queries or Telephonic Counseling call +91 5783921999
        </div>
      </div>

      <nav className="bg-white text-greenTheme flex items-center justify-between px-6 py-4 shadow-md4">
        <div className="logo">
          <img
            src="https://www.niilmuniversity.ac.in/web/assets/img/logo.png"
            alt="NIILM Skills University"
            className="h-16 "
            width={200}
                height={80}
          />
        </div>

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
            </li>
          ))}

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
