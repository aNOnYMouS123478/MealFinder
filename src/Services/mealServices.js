import axios from "axios";

const API_URL = "https://www.themealdb.com/api/json/v1/1";

export const fetchMealsByName = async (name) => {
  try {
    const response = await axios.get(
      `${www.themealdb.com / api / json / v1 / 1}/search.php?s=${name}`
    );
    return response.data.meals;
  } catch (error) {
    console.error("Error fetching meals:", error);
    return [];
  }
};
