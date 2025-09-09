import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState('');
  const [error, setError] = useState(false); // Handle errors

  useEffect(() => {
    const fetchApi = async () => {
      if (search === '') return; // Avoid empty searches

      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=37e858954eecab0bb7a7b375a28dcc1a`;
        const response = await fetch(url);

        if (!response.ok) {
          setError(true); // If city not found, set error
          setCity(null);
          return;
        }

        const data = await response.json();
        console.log(data); // Corrected console log

        setCity(data.main);
        setError(false); // Clear error state if the API call succeeds
      } catch (err) {
        console.error('Failed to fetch data:', err);
        setError(true);
      }
    };

    fetchApi(); // Call fetchApi when `search` changes
  }, [search]);

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Enter Your City"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {error ? (
        <p>Data not found. Please try again.</p>
      ) : city ? (
        <div>
          <h1>Weather in {search}</h1>
          <h1>Temperature: {city.temp}°C</h1>
          <h1>Humidity: {city.humidity}%</h1>
          <h1>
            Min: {city.temp_min}°C || Max: {city.temp_max}°C
          </h1>
        </div>
      ) : (
        <p>Enter a city name to get the weather details.</p>
      )}
    </>
  );
}

export default App;
