import { initCitiesLimit } from "./constants";
import { isBlank } from "./util";

// Search City
export const searchCity = async (cityName = "") => {
  
  try {
    let apiUrl = `/api/cities?_limit=${initCitiesLimit}`;
    if (!isBlank(cityName)) {
      apiUrl = `/api/cities?name=${cityName}`;
    }
    const res = await fetch(apiUrl);
    if (!res.ok) {
      throw new Error(`Error fetching data: ${res.statusText}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data", error);
    throw error;
  }
};
