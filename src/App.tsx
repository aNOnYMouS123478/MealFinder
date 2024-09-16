import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import MealCard from "./components/MealCard";
import MealDetail from "./components/MealDetail";
import { fetchMealsByName } from "./services/mealService";
import "./styles.css";
export default function App();
const [meals, setMeals] = useState([]);
const [selectedMeal, setSelectedMeal] = useState(null);

const handleSearch = async (query) => {
  const meals = await fetchMealsByName(query);
  setMeals(meals);
  setSelectedMeal(null);

  return (
    <div className="App">
      <h1>Meal Finder</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="meal-list">
        {selectedMeal ? (
          <MealDetail meal={selectedMeal} />
        ) : (
          meals &&
          meals.map((meal) => (
            <MealCard key={meal.idMeal} meal={meal} onClick={setSelectedMeal} />
          ))
        )}
      </div>
    </div>
  );
};
