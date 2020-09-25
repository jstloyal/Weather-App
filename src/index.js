import './assets/styles.scss';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import form from "./js/search-field";
import toggle from "./js/toggle";
import weather from "./js/weather-info";
import footer from "./js/footer";

const container = document.querySelector("#container");
container.appendChild(form);
container.appendChild(toggle);
container.appendChild(weather);
container.appendChild(footer);

const weatherForm = document.querySelector(".form-inline");
const inputForm = document.querySelector(".search");
const cityResult = document.querySelector(".location");
const currentTemp = document.querySelector(".weather");
const currentStatus = document.querySelector(".humidity");
const weatherDesc = document.querySelector(".description");

const key = "9c560aafa1296b8c6d8ea89e37551594";

async function getWeatherInfo(value) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${key}&units=metric`
  );

  const result = await response.json();
  const data = result;
  displayData(data);
  backgroundChange(data);

  console.log(data);
}

const test = getWeatherInfo("Lagos");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  getWeatherInfo(inputForm.value);
  weatherForm.reset();
});

const displayData = (data) => {
  cityResult.innerHTML =  `${data.name}, ${data.sys.country}`;
  currentTemp.innerHTML = `${Math.floor(data.main.temp)}°C`;
  currentStatus.innerHTML = `Humidity: ${data.main.humidity}%`
  weatherDesc.innerHTML = `Description: ${data.weather[0].description}`;
}

const backgroundChange = (data) => {
  if (data.weather[0].main === 'Clouds') {
    container.classList = "";
    container.classList.add("cloudy");
  } else if (data.weather[0].main === 'Rain' || data.weather[0].main === 'Thunderstorm' || data.weather[0].main === 'Drizzle') {
    container.classList = "";
    container.classList.add("rainy");
  } else if (data.weather[0].main === 'Mist' || data.weather[0].main === 'Haze' || data.weather[0].main === 'Fog') {
    container.classList = "";
    container.classList.add("misty");
  } else if (data.weather[0].main === 'Clear') {
    container.classList = "";
    container.classList.add("clear");
  } else if (data.weather[0].icon === '01n') {
    container.classList = "";
    container.classList.add("night");
  } else if (data.weather[0].icon === '01d') {
    container.classList = "";
    container.classList.add("day");
  } else if ( data.weather[0].icon === 'Wind' || data.weather[0].main === 'Tornado') {
    container.classList = "";
    container.classList.add("windy");
  } else {
    container.classList = "";
    container.classList.add("default");
  }
}
