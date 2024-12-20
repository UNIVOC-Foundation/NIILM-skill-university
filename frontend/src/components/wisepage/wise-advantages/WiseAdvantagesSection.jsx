import { wiseAdvantagesData } from "../../../data/wisepage/wiseAdvantagesData";

const WiseAdvantagesSection = () => {
  return (
    <table className="my-12 table-auto border-collapse border border-gray-300 w-full text-left">
      <thead>
        <tr className="text-black font-bold text-2xl">
          <th className="border border-gray-300 px-4 py-2">
            Benefits to Industry Partners
          </th>
          <th className="border border-gray-300 px-4 py-2">
            Benefits to Learners
          </th>
        </tr>
      </thead>
      <tbody className="text-lg">
        {wiseAdvantagesData.map((row, index) => (
          <tr
            key={index}
            className={`${
              index % 2 === 0 ? "bg-gray-100" : ""
            } hover:bg-gray-200`}
          >
            <td className="border border-gray-300 px-4 py-2">
              {row.industryPartners || ""}
            </td>
            <td className="border border-gray-300 px-4 py-2">{row.learners}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default WiseAdvantagesSection;
