import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import CityListings from "../components/CityListings";

const HomePage = ({ searchCity }) => {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false); // Initially, loading is false

  const initLoad = () => {
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
  }

  initLoad()

  const handleSearch = async (name) => {
    setLoading(true); // Set loading state to true before fetching data

    try {
      const data = await searchCity(name);
      setCities(data);
      console.log(data);
    } catch (error) {
      console.log("Error fetching data", error);
    } finally {
      setLoading(false); // Set loading state to false after fetching data
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
