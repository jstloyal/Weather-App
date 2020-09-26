const footer = (() => {
  const content = document.createElement('div');
  content.setAttribute('class', 'container-fluid');
  const listRow = document.createElement('div');
  listRow.setAttribute('class', 'row align-items-center d-flex flex-sm-row');
  listRow.setAttribute('id', 'myContainer');

  const current = document.createElement('div');
  current.setAttribute('class', 'col');
  const mainText = document.createElement('p');
  mainText.innerHTML = 'Current Weather';
  const currentTemp = document.createElement('p');
  currentTemp.setAttribute('class', 'currentTemparature');
  const currentDesc = document.createElement('p');
  currentDesc.setAttribute('class', 'myDesc');

  const today = document.createElement('div');
  today.setAttribute('class', 'col');
  const todayText = document.createElement('p');
  todayText.innerHTML = "Today's high";
  const todayHigh = document.createElement('p');
  todayHigh.setAttribute('class', 'todayHigh');
  const todayDesc = document.createElement('p');
  todayDesc.setAttribute('class', 'todayDesc');

  const tonight = document.createElement('div');
  tonight.setAttribute('class', 'col');
  const tonightText = document.createElement('p');
  tonightText.innerHTML = "Tonight's low";
  const tonightLow = document.createElement('p');
  tonightLow.setAttribute('class', 'tonightLow');
  const tonightDesc = document.createElement('p');
  tonightDesc.setAttribute('class', 'tonightDesc');

  const tomorrow = document.createElement('div');
  tomorrow.setAttribute('class', 'col');
  const tomorrowText = document.createElement('p');
  tomorrowText.innerHTML = 'Tomorrow';
  const tomorrowTemp = document.createElement('p');
  tomorrowTemp.setAttribute('class', 'nextDay');
  const iconTomorrow = document.createElement('p');
  iconTomorrow.innerHTML = 'Clear sky';

  current.appendChild(mainText);
  current.appendChild(currentTemp);
  current.appendChild(currentDesc);

  today.appendChild(todayText);
  today.appendChild(todayHigh);
  today.appendChild(todayDesc);

  tonight.appendChild(tonightText);
  tonight.appendChild(tonightLow);
  tonight.appendChild(tonightDesc);

  tomorrow.appendChild(tomorrowText);
  tomorrow.appendChild(tomorrowTemp);
  tomorrow.appendChild(iconTomorrow);

  listRow.appendChild(current);
  listRow.appendChild(today);
  listRow.appendChild(tonight);
  listRow.appendChild(tomorrow);

  content.appendChild(listRow);

  return content;
})();

export default footer;
