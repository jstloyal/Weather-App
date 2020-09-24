const footer = (() => {
  const content = document.createElement("div");
  content.setAttribute("class", "container-fluid");
  const listRow = document.createElement("div");
  listRow.setAttribute("class", "row align-items-center");
  listRow.setAttribute("id", "myContainer");

  const current = document.createElement("div");
  current.setAttribute("class", "col");
  const mainText = document.createElement("p");
  mainText.innerHTML = "Current Weather";
  const currentIcon = document.createElement("p");
  currentIcon.innerHTML = "ICON";
  const iconInfo = document.createElement("p");
  iconInfo.innerHTML = "Partly cloudy";

  const today = document.createElement("div");
  today.setAttribute("class", "col");
  const todayText = document.createElement("p");
  todayText.innerHTML = "Today";
  const todayIcon = document.createElement("p");
  todayIcon.innerHTML = "ICON";
  const iconToday = document.createElement("p");
  iconToday.innerHTML = "Partly cloudy";

  const tonight = document.createElement("div");
  tonight.setAttribute("class", "col");
  const tonightText = document.createElement("p");
  tonightText.innerHTML = "Tonight";
  const tonightIcon = document.createElement("p");
  tonightIcon.innerHTML = "ICON";
  const iconTonight = document.createElement("p");
  iconTonight.innerHTML = "Partly cloudy";

  const tomorrow = document.createElement("div");
  tomorrow.setAttribute("class", "col");
  const tomorrowText = document.createElement("p");
  tomorrowText.innerHTML = "Tomorrow";
  const tomorrowIcon = document.createElement("p");
  tomorrowIcon.innerHTML = "ICON";
  const iconTomorrow = document.createElement("p");
  iconTomorrow.innerHTML = "Partly cloudy";

  current.appendChild(mainText);
  current.appendChild(currentIcon);
  current.appendChild(iconInfo);

  today.appendChild(todayText);
  today.appendChild(todayIcon);
  today.appendChild(iconToday);

  tonight.appendChild(tonightText);
  tonight.appendChild(tonightIcon);
  tonight.appendChild(iconTonight);

  tomorrow.appendChild(tomorrowText);
  tomorrow.appendChild(tomorrowIcon);
  tomorrow.appendChild(iconTomorrow);

  listRow.appendChild(current);
  listRow.appendChild(today);
  listRow.appendChild(tonight);
  listRow.appendChild(tomorrow);

  content.appendChild(listRow);

  return content;
})();

export default footer;
