import { initCitiesLimit } from "./constants";
import { isBlank } from "./util";

// Search City
export const searchCity = async (cityName = "") => {
  
  try {
    let apiUrl = `/api/city?name=`;
    if (!isBlank(cityName)) {
      apiUrl = `/api/city?name=${cityName}`;
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

export const registerUser = async (newUser) => {
  const res = await fetch("/api/user/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUser)
  });
};

export const signIn = async (loginData) => {
  const res = await fetch("/api/user/signIn", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(loginData)
  });
};

