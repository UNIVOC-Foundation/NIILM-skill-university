import { useState } from "react";
import { programmesData } from "../../../data/wisepage/programmesData";

const ProgrammesSection = () => {
  const [selectedProgramme, setSelectedProgramme] = useState(programmesData[0]);

  return (
    <>
      <h1 className="text-4xl font-bold mb-12">Programmes & Specialisation</h1>
      <div className="grid grid-cols-[1fr_2fr] gap-4">
        <div className="p-4">
          <ul className="space-y-6">
            {programmesData.map((programme, index) => (
              <li key={index}>
                <button
                  className={`w-full text-xl font-bold text-left px-12 py-6 rounded-md ${
                    selectedProgramme.name === programme.name
                      ? "bg-white shadow-2xl"
                      : "bg-gray-100 text-gray-700"
                  } hover:bg-redTheme hover:text-white`}
                  onClick={() => setSelectedProgramme(programme)}
                >
                  {programme.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-4">
          <ul className="list-disc pl-5 space-y-1 text-redTheme text-xl mb-8">
            {selectedProgramme.details.specialization.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p className="mb-2 text-xl font-bold">
            <span className="font-bold">Duration:</span>{" "}
            {selectedProgramme?.details.duration}
          </p>
          <p className="mb-4 text-xl font-bold">
            <span className="font-bold">Eligibility:</span>{" "}
            {selectedProgramme.details.eligibility}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProgrammesSection;
