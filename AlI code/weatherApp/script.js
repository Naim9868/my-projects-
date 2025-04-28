// API Key - Sign up at openweathermap.org to get your own free key
const API_KEY = "4fa5e435f4462d7b2a684979b3ab04fd"; // Replace with your actual API key

// DOM Elements
const cityInput = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");
const locationElement = document.getElementById("location");
const tempElement = document.getElementById("temp");
const descElement = document.getElementById("weather-desc");
const iconElement = document.getElementById("icon");

// Fetch weather data

async function getWeather(city) {
  try {
    const response = await fetch(
        //path is important...
        // `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );
    
    if (!response.ok) throw new Error("City not found");
    
    const data = await response.json();
    console.log(data); // See all available data
    displayWeather(data);
    return data;
  } catch (error) {
    console.error("Error fetching weather:", error);
    return null;
  }
}

// Example usage
// getWeather("dhaka").then(weather => {
//   if (weather) {
//     console.log(`Temperature: ${weather.main.temp}°C`);
//     console.log(`Conditions: ${weather.weather[0].description}`);
//   }
// });

// Display weather data
function displayWeather(data) {
    const { name } = data;
    const { temp } = data.main;
    const { description, icon } = data.weather[0];
    
    console.log(name, temp, description);//for show the real output in the console..

    locationElement.textContent = name;
    tempElement.textContent = `${Math.round(temp)}°C`;
    descElement.textContent = description;
    iconElement.src = `https://openweathermap.org/img/wn/${icon}.png`;
    iconElement.style.display = "block";
}

// Clear weather data
function clearWeatherData() {
    locationElement.textContent = "--";
    tempElement.textContent = "--°C";
    descElement.textContent = "--";
    iconElement.style.display = "none";
}

// Event listeners
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const city = cityInput.value.trim();
   
    if (city) {
        console.log(city);
         getWeather(city);
    } else {
        alert("Please enter a city name");
    }
});

cityInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        searchBtn.click();
    }
});



// Initialize
clearWeatherData();


// now your responsibility is expand the app.....