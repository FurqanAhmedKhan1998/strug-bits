import React from "react";

function Modal({
  selectedMeal,
  selectedWeek,
  handleWeekSelection,
  handleSaveMeal,
  closeModal,
}) {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg ">
        <h2 className="text-xl font-semibold mb-4">
          Select a Week for {selectedMeal?.name}
        </h2>
        <div className="flex justify-between space-x-12 mb-4">
          {["week1", "week2", "week3", "week4"].map((week) => (
            <button
              key={week}
              onClick={() => handleWeekSelection(week)}
              className={`px-4 py-2 rounded ${
                selectedWeek === week ? "bg-blue-800 text-white" : "bg-gray-300"
              }`}
            >
              {week.replace("week", "Week ")}
            </button>
          ))}
        </div>
        <button
          onClick={handleSaveMeal}
          className={`w-full py-2 rounded ${
            selectedWeek ? "bg-blue-800" : "bg-gray-400 cursor-not-allowed"
          }`}
          disabled={!selectedWeek}
        >
          Save
        </button>
        <button
          onClick={closeModal}
          className="w-full py-2 mt-4 bg-gray-400 text-white rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
