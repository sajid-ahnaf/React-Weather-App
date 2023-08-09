// Importing necessary modules and styles
/*The import React, { useState } from "react"; 
line is directly related to importing the essential 
React library and the useState hook, which are fundamental 
to building and managing components and their state in a React application*/
import React, { useState } from "react";
import "./styles.css";

// Configuration for the weather API
const api = {
  key: "5dbb60bf5aaa4b3506820753fb5246aa",
  base: "https://api.openweathermap.org/data/2.5/"
};

// Main functional component for the weather application
export default function App() {
  // State variables to manage user input and weather data
  //Syntax of using useState: const [stateVariable, setStateFunction] = useState(initialValue);
  const [query, setQuery] = useState(""); // Holds the user's search query
  const [weather, setWeather] = useState(""); // Holds the weather data

  // Function to initiate a search when Enter key is pressed
  const search = (evt) => {
    if (evt.key === "Enter") {
      // Fetch weather data from the API based on the user's query
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result); // Update the weather state with fetched data
          setQuery(""); // Clear the query input
          // console.log(result);
        });
    }
  };

  // Function to format and build the date string
  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  // JSX code for rendering the weather application
  return (
    <div
      className={
        typeof weather.main !== "undefined"
          ? weather.main.temp > 16
            ? "app warm"
            : "app"
          : "app"
      }
    >
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {typeof weather.main !== "undefined" ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp)}°c</div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        ) : (
          "" // Placeholder for when weather data is not available
        )}
      </main>
    </div>
  );
}
