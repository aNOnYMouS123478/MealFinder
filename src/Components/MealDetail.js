import React from "react";

const MealDetail = ({ meal }) => {
  if (!meal) return null;

  return (
    <div className="meal-detail">
      <h2>{meal.strMeal}</h2>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <h3>Ingredients:</h3>
      <ul>
        {Array.from(
          { length: 20 },
          (_, i) =>
            meal[`strIngredient${i + 1}`] && (
              <li key={i}>
                {meal[`strIngredient${i + 1}`]} - {meal[`strMeasure${i + 1}`]}
              </li>
            )
        )}
      </ul>
      <h3>Instructions:</h3>
      <p>{meal.strInstructions}</p>
    </div>
  );
};

export default MealDetail;
