import React from "react";

function Navbar({ setActiveTab, activeTab, handleAddToWeek }) {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-24 bg-white py-4 border-b sticky top-0 z-10">
      {["all", "week1", "week2", "week3", "week4"].map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-4 py-2 rounded text-sm md:text-base ${
            activeTab === tab
              ? "text-blue-800 border-b-4 border-blue-600"
              : "text-gray-600"
          }`}
        >
          {tab === "all" ? "All Meals" : `Week ${tab.replace("week", "")}`}
        </button>
      ))}
      <button
        onClick={() => handleAddToWeek()}
        className="px-4 py-2 bg-blue-800 text-white rounded text-sm md:text-base"
      >
        Add to Week
      </button>
    </div>
  );
}

export default Navbar;
