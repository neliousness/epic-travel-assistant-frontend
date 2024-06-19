import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import CityListings from "../components/CityListings";
import { searchCity } from "../utils/ApiHelper";

const HomePage = () => {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const data = await searchCity('');
        setCities(data);
        console.log(data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCities();
  }, []);

  const handleSearch = async (name) => {
    setLoading(true);

    try {
      const data = await searchCity(name);
      setCities(data);
      console.log(data);
    } catch (error) {
      console.log("Error fetching data", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Hero handleSearch={handleSearch} />
      <CityListings cities={cities} loading={loading} />
    </>
  );
};

export default HomePage;
