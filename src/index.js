import './assets/styles.scss';

import form from './js/search-field';
import toggle from './js/toggle';
import weather from './js/weather-info';
import footer from './js/footer';

const container = document.querySelector('#container');
container.appendChild(form);
container.appendChild(toggle);
container.appendChild(weather);
container.appendChild(footer);

const weatherForm = document.querySelector('.form-inline');
const inputForm = document.querySelector('.search');
const cityResult = document.querySelector('.location');
const currentTemp = document.querySelector('.weather');
const currentStatus = document.querySelector('.humidity');
const weatherDesc = document.querySelector('.description');
const myToggle = document.querySelector('.toggle');
const toggler = document.querySelector('.toggler');
const currentTemparature = document.querySelector('.currentTemparature');
const high = document.querySelector('.todayHigh');
const night = document.querySelector('.tonightLow');
const myDesc = document.querySelector('.myDesc');
const todayDesc = document.querySelector('.todayDesc');
const tonightDesc = document.querySelector('.tonightDesc');
const nextDayTemp = document.querySelector('.nextDay');

const key = '9c560aafa1296b8c6d8ea89e37551594';

const backgroundChange = (data) => {
  if (data.weather[0].main === 'Clouds') {
    container.classList = '';
    container.classList.add('cloudy');
  } else if (data.weather[0].main === 'Rain' || data.weather[0].main === 'Thunderstorm' || data.weather[0].main === 'Drizzle') {
    container.classList = '';
    container.classList.add('rainy');
  } else if (data.weather[0].main === 'Mist' || data.weather[0].main === 'Haze' || data.weather[0].main === 'Fog') {
    container.classList = '';
    container.classList.add('misty');
  } else if (data.weather[0].main === 'Clear') {
    container.classList = '';
    container.classList.add('clear');
  } else if (data.weather[0].icon === '01n') {
    container.classList = '';
    container.classList.add('night');
  } else if (data.weather[0].icon === '01d') {
    container.classList = '';
    container.classList.add('day');
  } else if (data.weather[0].icon === 'Wind' || data.weather[0].main === 'Tornado') {
    container.classList = '';
    container.classList.add('windy');
  } else {
    container.classList = '';
    container.classList.add('default');
  }
};

const tempToF = (temp) => temp * (9 / 5) + 32;
const convertTemp = (data) => {
  const currentTempF = tempToF(data.main.temp);
  const currentTemparatureF = tempToF(data.main.temp);
  const highF = tempToF(data.main.temp_max);
  const nightF = tempToF(data.main.temp_min);
  const tomorrowF = tempToF(data.main.temp);

  myToggle.addEventListener('change', () => {
    if (toggler.checked) {
      currentTemp.innerHTML = `${Math.floor(currentTempF)}°F`;
      currentTemparature.innerHTML = `${Math.floor(currentTemparatureF)}°F`;
      high.innerHTML = `${Math.floor(highF)}°F`;
      night.innerHTML = `${Math.floor(nightF)}°F`;
      nextDayTemp.innerHTML = `${Math.floor(tomorrowF)}°F`;
    } else {
      currentTemp.innerHTML = `${Math.floor(data.main.temp)}°C`;
      currentTemparature.innerHTML = `${Math.floor(data.main.temp)}°C`;
      high.innerHTML = `${Math.floor(data.main.temp_max)}°C`;
      night.innerHTML = `${Math.floor(data.main.temp_min)}°C`;
      nextDayTemp.innerHTML = `${Math.floor(data.main.temp)}°C`;
    }
  });
};

const displayData = (data) => {
  cityResult.innerHTML = `${data.name}, ${data.sys.country}`;
  currentTemp.innerHTML = `${Math.floor(data.main.temp)}°C`;
  currentStatus.innerHTML = `Humidity: ${data.main.humidity}%`;
  weatherDesc.innerHTML = `Description: ${data.weather[0].description}`;
  currentTemparature.innerHTML = `${Math.floor(data.main.temp)}°C`;
  myDesc.innerHTML = `${data.weather[0].description}`;
  high.innerHTML = `${Math.floor(data.main.temp_max)}°C`;
  todayDesc.innerHTML = `${data.weather[0].description}`;
  night.innerHTML = `${Math.floor(data.main.temp_min)}°C`;
  tonightDesc.innerHTML = `${data.weather[0].description}`;
  nextDayTemp.innerHTML = `${Math.floor(data.main.temp)}°C`;
  convertTemp(data);
};

async function getWeatherInfo(value) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${key}&units=metric`,
    );

    const result = await response.json();
    const data = result;
    displayData(data);
    backgroundChange(data);
  } catch (error) {
    inputForm.value = '';
    inputForm.classList.add('error');
    inputForm.placeholder = 'Enter a valid city';
  }
}

getWeatherInfo('Lagos');

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();
  getWeatherInfo(inputForm.value);
  weatherForm.reset();
});
