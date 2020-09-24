const weather = (() => {
  const mainContent = document.createElement("div");
  mainContent.setAttribute("class", "info text-center");
  // mainContent.setAttribute("class", "align-middle");
  const myLocation = document.createElement("h3");
  myLocation.setAttribute("class", "location");
  myLocation.innerText = "Lagos, NG";
  const myWeather = document.createElement("h2");
  myWeather.setAttribute("class", "weather");
  myWeather.innerText = "25°C";
  const humidity = document.createElement("p");
  humidity.innerText = "Partly cloudy";

  mainContent.appendChild(myLocation);
  mainContent.appendChild(myWeather);
  mainContent.appendChild(humidity);

  return mainContent;
})();

export default weather;
