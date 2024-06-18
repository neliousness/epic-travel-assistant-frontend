import { useState } from "react";
import { FaMapMarkerAlt, FaTemperatureHigh, FaSun, FaMoneyBillWave } from 'react-icons/fa';

import { appConfig } from "../utils/constants";

const CityListing = ({ city }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const color = appConfig.theme.primaryColor;

  return (
    <div className="bg-white rounded-xl shadow-md p-4 border border-transparent hover:border-blue-500 transition-all duration-300">
      {/* Top section - City information */}
      <div className="mb-4">
        <h3 className="text-2xl font-extrabold text-gray-800 mb-2">{city.name}</h3>
        <div className="text-gray-600 mb-2 flex items-center">
          <FaMapMarkerAlt className="mr-1" /> {city.country}
        </div>
        <p className="mt-2">Population: {city.population.toLocaleString()}</p>
        <p className="mt-2">GDP per Capita: ${city.gdp_per_capita.toLocaleString()}</p>
      </div>

      {/* Bottom section divided into two halves */}
      <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
        {/* Bottom left - Weather information */}
        <div className="w-full lg:w-1/2 bg-gray-100 rounded-lg p-4">
          <h4 className="text-lg font-bold flex items-center">
            <FaTemperatureHigh className="mr-2" /> Weather
          </h4>
          <p className="mt-2">Temperature: {city.weather.temperature}°C</p>
          <p className="mt-2 flex items-center">
            <FaSun className="mr-2" /> Description: {city.weather.description}
          </p>
          <p className="mt-2">Forecast Date: {new Date(city.weather.forecast_date).toLocaleDateString()}</p>
        </div>

        {/* Bottom right - Currency information */}
        <div className={`w-full lg:w-1/2 bg-${color}-100 rounded-lg p-4`}>
          <h4 className="text-lg font-bold flex items-center">
            <FaMoneyBillWave className="mr-2" /> Exchange Rates
          </h4>
          {city.exchange_rates.map((rate, index) => (
            <div key={index} className="mt-2">
              <p>Base: {rate.base_currency}</p>
              <p>Target: {rate.target_currency}</p>
              <p>Rate: {rate.rate}</p>
              <p>Date: {new Date(rate.retrieval_date).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CityListing;
