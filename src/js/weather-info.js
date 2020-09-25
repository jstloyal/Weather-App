const weather = (() => {
  const mainContent = document.createElement("div");
  mainContent.setAttribute("class", "info text-center");
  const myLocation = document.createElement("h3");
  myLocation.setAttribute("class", "location");
  // myLocation.innerText = "Lagos, NG";
  const myWeather = document.createElement("h2");
  myWeather.setAttribute("class", "weather");
  // myWeather.innerText = "25°C";
  const humidity = document.createElement("p");
  humidity.setAttribute("class", "humidity");
  const description = document.createElement("p");
  description.setAttribute("class", "description");
  // humidity.innerText = "Partly cloudy";

  mainContent.appendChild(myLocation);
  mainContent.appendChild(myWeather);
  mainContent.appendChild(humidity);
  mainContent.appendChild(description);

  return mainContent;
})();

export default weather;
