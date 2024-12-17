import React from "react";
import MealCard from "./MealCard";

function MealsList({
  meals,
  weeks,
  activeTab,
  selectedMeal,
  handleMealSelection,
  deleteMealFromWeek,
}) {
  let displayedMeals = [];

  if (activeTab === "all") {
    displayedMeals = meals;
  } else if (weeks[activeTab]) {
    displayedMeals = weeks[activeTab];
  }

  return (
    <div className="p-6 md:p-24  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {displayedMeals.length > 0 ? (
        displayedMeals.map((meal) => (
          <MealCard
            key={meal.id}
            meal={meal}
            handleMealSelection={handleMealSelection}
            selectedMeal={selectedMeal}
            deleteMealFromWeek={deleteMealFromWeek}
            activeTab={activeTab}
          />
        ))
      ) : (
        <p className="text-center text-gray-500 col-span-full">
          No meals available for this week.
        </p>
      )}
    </div>
  );
}

export default MealsList;
