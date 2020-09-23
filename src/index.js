import './assets/styles.scss';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import form from "./js/search-field";
import toggle from "./js/toggle";
import weather from "./js/weather-info";

const container = document.querySelector("#container");
container.appendChild(form);
container.appendChild(toggle);
container.appendChild(weather);
