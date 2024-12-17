import React, { useEffect, useState } from "react";
import "./index.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import MealsList from "./components/MealsList";
import Modal from "./components/Modal";
import WeekOrdersHeading from "./components/Heading";

function App() {
  const [meals, setMeals] = useState([]);
  const [weeks, setWeeks] = useState({
    week1: [],
    week2: [],
    week3: [],
    week4: [],
  });
  const [activeTab, setActiveTab] = useState("all");
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedWeek, setSelectedWeek] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => setMeals(data.recipes))
      .catch((err) => console.error("Error fetching meals:", err));
  }, []);

  const addMealToWeek = (meal, week) => {
    if (!weeks[week].some((m) => m.id === meal.id)) {
      setWeeks({ ...weeks, [week]: [...weeks[week], meal] });
      setSelectedMeal(null);
      setModalOpen(false);
    } else {
      alert("Meal already added to this week.");
    }
  };

  const handleMealSelection = (meal) => {
    if (selectedMeal?.id === meal.id) {
      setSelectedMeal(null);
    } else {
      setSelectedMeal(meal);
    }
  };

  const handleWeekSelection = (week) => {
    setSelectedWeek(week);
  };

  const handleSaveMeal = () => {
    if (selectedWeek && selectedMeal) {
      addMealToWeek(selectedMeal, selectedWeek);
    } else {
      alert("Please select a week.");
    }
  };

  const deleteMealFromWeek = (mealId, week) => {
    setWeeks({
      ...weeks,
      [week]: weeks[week].filter((meal) => meal.id !== mealId),
    });
  };

  return (
    <div className="font-sans bg-gradient-to-r from-pink-50 via-pink-50 to-blue-100 min-h-screen">
      <Banner />
      <WeekOrdersHeading />
      <Navbar
        setActiveTab={setActiveTab}
        activeTab={activeTab}
        handleAddToWeek={() => setModalOpen(true)}
      />
      <MealsList
        meals={meals}
        weeks={weeks}
        activeTab={activeTab}
        selectedMeal={selectedMeal}
        handleMealSelection={handleMealSelection}
        deleteMealFromWeek={deleteMealFromWeek}
      />

      {modalOpen && (
        <Modal
          selectedMeal={selectedMeal}
          selectedWeek={selectedWeek}
          handleWeekSelection={handleWeekSelection}
          handleSaveMeal={handleSaveMeal}
          closeModal={() => setModalOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
