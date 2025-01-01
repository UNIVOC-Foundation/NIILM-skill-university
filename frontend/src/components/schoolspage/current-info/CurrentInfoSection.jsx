const achievements = [
  {
    title: "1st in India",
    description: "to feature Learn & Earn during Degree",
    bgColor: "bg-redTheme",
  },
  {
    title: "1st in India",
    description: "to promote NEP2020 with Industry Integration",
    bgColor: "bg-greenTheme",
  },
  {
    title: "1st in India",
    description: "to promote Overseas Mobility",
    bgColor: "bg-redTheme",
  },
  {
    title: "1st in India",
    description: "to be the Awarding Body of UGC & NCVET, MSDE, GoI",
    bgColor: "bg-greenTheme",
  },
];

const stats = [
  { number: "3500+", label: "Trainees" },
  { number: "50+", label: "Programmes" },
  { number: "100+", label: "Industry/Skill Partners" },
  { number: "2", label: "Campuses" },
  { number: "15+", label: "Schools & Centers" },
  { number: "100+", label: "Industry Experts" },
];

const CurrentInfoSection = () => {
  return (
    <div className="relative pb-[45rem] md:pb-8">
      <div className="absolute bottom-0 w-full z-0 h-[50px] bg-greenTheme"></div>
      <div className="max-w-7xl mx-auto p-6 relative z-10 mt-[0px] h-[335px]">
        <div className="border-2 border-redTheme rounded-3xl p-8 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`${achievement.bgColor} rounded-xl p-6 text-white shadow-lg transform hover:scale-105 transition-transform duration-300`}
              >
                <h3 className="text-2xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>

          {/* Statistics */}
          <div className="bg-white rounded-xl p-8 shadow-lg border broder-black">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-[#003366] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentInfoSection;
