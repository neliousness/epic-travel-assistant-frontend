import React from 'react';
import Modal from 'react-modal';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '90%', 
    maxWidth: '600px', 
    padding: '20px',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
};

const CityDetailModal = ({ isOpen, onRequestClose, city }) => {
    
    const position = [city.lon,city.lat];

    const rates = city.exchangeRates != null ? city.exchangeRates.slice(0, 2) : [];

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="City Details"
      style={customStyles}
    >
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">{city.name} Details</h2>
        <div className="h-64 mb-4">
          <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
              <Popup>
                {city.name}, {city.country}
              </Popup>
            </Marker>
          </MapContainer>
        </div>
        <div className="text-lg">
          <p>Country: {city.country}</p>
          <p>Population: {city.population}</p>
          <p>GDP per Capita: ${city.gdpPerCapita}</p>
          <p>Weather: {city.weather.temperature}°C, {city.weather.description}</p>
          <h4 className="font-bold mt-4">Exchange Rates:</h4>
          {rates.map((rate, index) => (
            <div key={index} className="mt-2">
              <p>Base: {rate.baseCurrency}</p>
              <p>Target: {rate.targetCurrency}</p>
              <p>Rate: {rate.rate}</p>
              <p>Date: {new Date(rate.retrievalDate).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
        <button onClick={onRequestClose} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">Close</button>
      </div>
    </Modal>
  );
};

export default CityDetailModal;
