import React from "react";
import { FaTrash } from "react-icons/fa";

function MealCard({
  meal,
  handleMealSelection,
  selectedMeal,
  deleteMealFromWeek,
  activeTab,
}) {
  const isSelected = selectedMeal?.id === meal.id;

  return (
    <div
      onClick={() => handleMealSelection(meal)}
      className={`bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer p-4 w-full max-w-xs ${
        isSelected ? "border-4 border-blue-500" : ""
      } transition-all duration-300 hover:scale-105 mx-auto`}
    >
      <img
        src={meal.image}
        alt={meal.name}
        className="w-full h-32 object-cover rounded-lg mb-4"
      />
      <div className="p-2">
        <h3 className="text-base font-semibold mb-2">{meal.name}</h3>{" "}
        {meal.instructions.map((instruction, index) => (
          <p key={index} className="text-gray-600 text-xs">
            {instruction}
          </p>
        ))}
        <div className="flex justify-between items-center text-xs mt-2">
          <p className="text-black font-medium">
            Cuisine: <span className="text-gray-500">{meal.cuisine}</span>
          </p>
          <p className="text-black font-medium">
            Rating:{" "}
            <span className="text-yellow-500 font-semibold">
              {meal.rating} ⭐⭐⭐⭐⭐
            </span>
          </p>
        </div>
        {activeTab !== "all" && (
          <div
            className="absolute top-2 right-2 text-red-500 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              deleteMealFromWeek(meal.id, activeTab);
            }}
          >
            <FaTrash size={16} />
          </div>
        )}
      </div>
    </div>
  );
}

export default MealCard;
