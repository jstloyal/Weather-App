const weather = (() => {
  const mainContent = document.createElement("div");
  mainContent.setAttribute("class", "info text-center");
  const myLocation = document.createElement("h3");
  myLocation.setAttribute("class", "location");
  const myWeather = document.createElement("h2");
  myWeather.setAttribute("class", "weather");
  const humidity = document.createElement("p");
  humidity.setAttribute("class", "humidity");
  const description = document.createElement("p");
  description.setAttribute("class", "description");

  mainContent.appendChild(myLocation);
  mainContent.appendChild(myWeather);
  mainContent.appendChild(humidity);
  mainContent.appendChild(description);

  return mainContent;
})();

export default weather;
