import { fetchForecast, getCityOnLoad, apiData } from "./weatherapi";
import { getUsefulData } from "./localApi";
import { forecast } from "./constructors";

import expandSVG from "./images/keyboard_arrow_down.svg";
import retractSVG from "./images/keyboard_arrow_up.svg";
import hoursSVG from "./images/hours.svg";
import todaySVG from "./images/calendar_today.svg";
import openFullSVG from "./images/open_in_full.svg";
import closeSVG from "./images/cancel.svg";

const dayContainer = document.getElementById("day-container");
// const hoursContainer = document.getElementById("hours-container");
// const forecastContainer = document.getElementById("forecast-container");
export const cityInput = document.getElementById("search");
export const cityChangeBtn = document.getElementById("search-btn");
export const UoM = document.getElementById("UOM");
const fullForecast = document.getElementById("forecast-container");
// const fCont0 = document.getElementById("cont0");
// const fCont1 = document.getElementById("cont1");
// const fCont2 = document.getElementById("cont2");

export function renderTodayWeather() {
  Array.from(dayContainer.children).forEach((el) => {
    el.remove();
  });
  dayContainer.className = "";
  const tags = generateDayTags();
  const val = UoM.value;

  //TOP
  //first
  const weatherIcon = tags.icon;
  const location = genP();
  //second
  const localTime = genP();
  const condition = genP();
  const currentTemp = genP();
  const humidity = genP();
  //BOTTOM
  const maxTemp = genP();
  const minTemp = genP();
  const sunrise = genP();
  const sunset = genP();
  const precipitation = genP();
  const pressure = genP();
  const windDir = genP();
  const windSpeed = genP();
  const rainProb = genP();
  const snowProb = genP();

  //TOP
  weatherIcon.src = forecast.current.iconURL;
  location.textContent = forecast.location;
  localTime.textContent = forecast.current.localTime;
  condition.textContent = forecast.current.condition;
  currentTemp.textContent = `Temperature: ${forecast.current.temperature[val]}`;
  humidity.textContent = `Humidity: ${forecast.current.humidity}`;
  //BOTTOM
  maxTemp.textContent = `MaxTemp: ${forecast.forecastDay[0].maxTemp[val]}`;
  minTemp.textContent = `MinTemp: ${forecast.forecastDay[0].minTemp[val]}`;
  sunrise.textContent = `Sunrise: ${forecast.forecastDay[0].sunrise}`;
  sunset.textContent = `Sunset: ${forecast.forecastDay[0].sunset}`;
  precipitation.textContent = `Precipitation: ${forecast.current.precipitation[val]}`;
  pressure.textContent = `Pressure: ${forecast.current.pressure[val]}`;
  windDir.textContent = `Wind direction: ${forecast.current.windDirection}`;
  windSpeed.textContent = `Wind speed: ${forecast.current.windSpeed[val]}`;
  rainProb.textContent = `Rain chance: ${forecast.forecastDay[0].rainChance}`;
  snowProb.textContent = `Snow chance: ${forecast.forecastDay[0].snowChance}`;

  //TOP
  tags.topSection.appendChild(weatherIcon);
  tags.topSection.appendChild(location);
  tags.topSection.appendChild(localTime);
  tags.topSection.appendChild(condition);
  tags.topSection.appendChild(currentTemp);
  tags.topSection.appendChild(humidity);
  //BOTTOM
  tags.bottomSection.appendChild(maxTemp);
  tags.bottomSection.appendChild(minTemp);
  tags.bottomSection.appendChild(sunrise);
  tags.bottomSection.appendChild(sunset);
  tags.bottomSection.appendChild(precipitation);
  tags.bottomSection.appendChild(pressure);
  tags.bottomSection.appendChild(windDir);
  tags.bottomSection.appendChild(windSpeed);
  tags.bottomSection.appendChild(rainProb);
  tags.bottomSection.appendChild(snowProb);

  dayContainer.appendChild(tags.topSection);
  dayContainer.appendChild(tags.bottomSection);
  dayContainer.appendChild(tags.expandIcon);

  tags.expandIcon.addEventListener("click", expandContainer);
}

export function renderForecast() {
  const val = UoM.value;
  let arr = Array.from(fullForecast.children);
  arr.forEach((el) => {
    if (el.style.width) {
      el.style = "";
    }
    const subArr = Array.from(el.children);
    subArr.forEach((e) => {
      e.remove();
    });
  });

  const names = [
    "icon",
    "location",
    "date",
    "condition",
    "avgHumidity",
    "maxTemp",
    "minTemp",
    "avgTemp",
    "sunrise",
    "sunset",
    "maxWind",
    "rainChance",
    "snowChance",
  ];

  for (let i = 0; i < 3; i++) {
    const dynamicVars = {};
    for (let j = 0; j < names.length; j++) {
      dynamicVars[names[j]] = genP();
    }

    const btn = document.createElement("div");
    const hourIcon = new Image(20, 20);
    const front = document.createElement("div");
    const icon = new Image();

    btn.className = "hour-btn";
    hourIcon.src = hoursSVG;
    hourIcon.id = `hour-btn-${i}`;
    front.className = "front-side";
    icon.src = forecast.forecastDay[i].iconURL;

    dynamicVars.location.textContent = forecast.location;
    dynamicVars.date.textContent = forecast.forecastDay[i].date;
    dynamicVars.condition.textContent = forecast.forecastDay[i].condition;
    dynamicVars.avgHumidity.textContent = `AVG humidity: ${forecast.forecastDay[i].avgHumidity}`;
    dynamicVars.maxTemp.textContent = `Max temp: ${forecast.forecastDay[i].maxTemp[val]}`;
    dynamicVars.minTemp.textContent = `Min temp: ${forecast.forecastDay[i].minTemp[val]}`;
    dynamicVars.avgTemp.textContent = `AVG temp: ${forecast.forecastDay[i].avgTemp[val]}`;
    dynamicVars.sunrise.textContent = `Sunrise: ${forecast.forecastDay[i].sunrise}`;
    dynamicVars.sunset.textContent = `Sunset: ${forecast.forecastDay[i].sunset}`;
    dynamicVars.maxWind.textContent = `Max wind: ${forecast.forecastDay[i].maxWind[val]}`;
    dynamicVars.rainChance.textContent = `Rain chance: ${forecast.forecastDay[i].rainChance}`;
    dynamicVars.snowChance.textContent = `Snow chance: ${forecast.forecastDay[i].snowChance}`;

    front.appendChild(icon);
    front.appendChild(dynamicVars.location);
    front.appendChild(dynamicVars.date);
    front.appendChild(dynamicVars.condition);
    front.appendChild(dynamicVars.avgHumidity);
    front.appendChild(dynamicVars.maxTemp);
    front.appendChild(dynamicVars.minTemp);
    front.appendChild(dynamicVars.avgTemp);
    front.appendChild(dynamicVars.sunrise);
    front.appendChild(dynamicVars.sunset);
    front.appendChild(dynamicVars.maxWind);
    front.appendChild(dynamicVars.rainChance);
    front.appendChild(dynamicVars.snowChance);

    btn.appendChild(hourIcon);
    arr[i].appendChild(btn);
    arr[i].appendChild(front);
    generateHourTable(i, arr[i]);

    hourIcon.addEventListener("click", showHours);
  }
}

function showHours(e) {
  const container = e.target.parentNode.parentNode;
  const btnCont = container.children[0];
  const front = container.children[1];
  const table = container.children[2];

  const dayIcon = new Image(20, 20);
  const fullViewIcon = new Image(20, 20);

  dayIcon.src = todaySVG;
  fullViewIcon.src = openFullSVG;

  front.style.display = "none";
  table.style.display = "block";

  e.target.remove();

  btnCont.appendChild(dayIcon);
  btnCont.appendChild(fullViewIcon);

  dayIcon.addEventListener("click", showDay);
  fullViewIcon.addEventListener("click", showFullView);
}

//need to fix view and cancel btn
function showFullView(e) {
  const cancelBtn = new Image(20, 20);
  const date = document.createElement("p");

  const container = e.target.parentNode.parentNode;
  const btnCont = container.children[0];
  const table = container.children[2];
  const tableConWidth = table.scrollWidth;
  const tableConHeight = table.scrollHeight;

  date.textContent = forecast.forecastDay[container.id[4]].date;

  if (tableConHeight + 20 < document.body.clientHeight) {
    container.style.height = `${tableConHeight + 25}px`;
  } else {
    container.style.height = `${document.body.clientHeight - 20}px`;
  }
  if (tableConWidth < document.body.clientWidth) {
    container.style.width = `${tableConWidth + 5}px`;
  } else {
    container.style.width = `${document.body.clientWidth}px`;
  }

  cancelBtn.src = closeSVG;

  btnCont.children[1].remove();
  btnCont.children[0].remove();

  btnCont.appendChild(date);
  btnCont.appendChild(cancelBtn);

  cancelBtn.addEventListener("click", showPartialView);
}

function showPartialView(e) {
  const container = e.target.parentNode.parentNode;
  const btnCont = container.children[0];

  const dayIcon = new Image(20, 20);
  const fullViewIcon = new Image(20, 20);

  dayIcon.src = todaySVG;
  fullViewIcon.src = openFullSVG;

  container.style = "";

  btnCont.children[0].remove();
  e.target.remove();

  btnCont.appendChild(dayIcon);
  btnCont.appendChild(fullViewIcon);

  dayIcon.addEventListener("click", showDay);
  fullViewIcon.addEventListener("click", showFullView);
}

function showDay(e) {
  const container = e.target.parentNode.parentNode;
  const btnCont = container.children[0];
  const front = container.children[1];
  const table = container.children[2];

  const arr = Array.from(btnCont.children);

  const hourIcon = new Image(20, 20);

  hourIcon.src = hoursSVG;

  front.style.display = "block";
  table.style.display = "none";

  arr.forEach((el) => {
    el.remove();
  });

  btnCont.appendChild(hourIcon);

  hourIcon.addEventListener("click", showHours);
}

function generateHourTable(day, arr) {
  const val = UoM.value;
  const wrapper = document.createElement("div");
  const table = document.createElement("table");

  const infoLine = document.createElement("tr");
  const empty = document.createElement("th");
  const infoCond = document.createElement("th");
  const infoTemp = document.createElement("th");
  const infoWindSpeed = document.createElement("th");
  const infoWindDir = document.createElement("th");
  const infoPressure = document.createElement("th");
  const infoPrecipitation = document.createElement("th");
  const infoHumidity = document.createElement("th");
  const infoRainChance = document.createElement("th");
  const infoSnowChance = document.createElement("th");

  wrapper.className = "table-wrapper";
  wrapper.id = `wrapper${day}`;
  table.className = "hour-table";

  infoCond.textContent = "C";
  infoTemp.textContent = "T";
  infoWindSpeed.textContent = "Ws";
  infoWindDir.textContent = "Wd";
  infoPressure.textContent = "Prs";
  infoPrecipitation.textContent = "Prc";
  infoHumidity.textContent = "H";
  infoRainChance.textContent = "R%";
  infoSnowChance.textContent = "S%";

  infoLine.appendChild(empty);
  infoLine.appendChild(infoCond);
  infoLine.appendChild(infoTemp);
  infoLine.appendChild(infoWindSpeed);
  infoLine.appendChild(infoWindDir);
  infoLine.appendChild(infoPressure);
  infoLine.appendChild(infoPrecipitation);
  infoLine.appendChild(infoHumidity);
  infoLine.appendChild(infoRainChance);
  infoLine.appendChild(infoSnowChance);

  table.appendChild(infoLine);

  for (let j = 0; j < 24; j++) {
    const line = document.createElement("tr");
    const time = document.createElement("th");
    const condition = document.createElement("td");
    const icon = new Image(20, 20);
    const temperature = document.createElement("td");
    const windSpeed = document.createElement("td");
    const windDir = document.createElement("td");
    const pressure = document.createElement("td");
    const precipitation = document.createElement("td");
    const humidity = document.createElement("td");
    const rainChance = document.createElement("td");
    const snowChance = document.createElement("td");

    time.textContent = forecast.forecastDay[day].hour[j].time;
    icon.src = forecast.forecastDay[day].hour[j].iconURL;
    condition.appendChild(icon);
    temperature.textContent = forecast.forecastDay[day].hour[j].temp[val];
    windSpeed.textContent = forecast.forecastDay[day].hour[j].windSpeed[val];
    windDir.textContent = forecast.forecastDay[day].hour[j].windDirection;
    pressure.textContent = forecast.forecastDay[day].hour[j].pressure[val];
    precipitation.textContent =
      forecast.forecastDay[day].hour[j].precipitation[val];
    humidity.textContent = forecast.forecastDay[day].hour[j].humidity;
    rainChance.textContent = forecast.forecastDay[day].hour[j].rainChance;
    snowChance.textContent = forecast.forecastDay[day].hour[j].snowChance;

    line.appendChild(time);
    line.appendChild(condition);
    line.appendChild(temperature);
    line.appendChild(windSpeed);
    line.appendChild(windDir);
    line.appendChild(pressure);
    line.appendChild(precipitation);
    line.appendChild(humidity);
    line.appendChild(rainChance);
    line.appendChild(snowChance);

    table.appendChild(line);
  }

  wrapper.appendChild(table);
  arr.appendChild(wrapper);
}

function genP() {
  const p = document.createElement("p");
  p.className = "data-para";
  return p;
}

function generateDayTags() {
  const topSection = document.createElement("div");
  const bottomSection = document.createElement("div");
  const expandIcon = new Image();

  const icon = new Image();

  topSection.className = "top";
  bottomSection.className = "bottom";
  icon.className = "icon";

  expandIcon.className = "expand";

  expandIcon.src = expandSVG;

  return {
    topSection,
    bottomSection,
    expandIcon,
    icon,
  };
}

function retractContainer(e) {
  const expandIcon = new Image();

  Array.from(e.target.parentNode.children).forEach((element) => {
    if (element.className === "bottom") {
      element.style.display = "none";
    }
  });
  e.target.remove();

  expandIcon.src = expandSVG;
  expandIcon.className = "expand";

  dayContainer.className = "";

  dayContainer.appendChild(expandIcon);

  expandIcon.addEventListener("click", expandContainer);
}

function expandContainer(e) {
  const container = e.target.parentNode;
  const retractIcon = new Image();

  retractIcon.src = retractSVG;
  retractIcon.className = "retract";

  dayContainer.className = "full-day";

  setTimeout(() => {
    Array.from(container.children).forEach((element) => {
      if (element.className === "bottom") {
        element.style.display = "flex";
      }
    });
  }, 1000);

  e.target.remove();
  dayContainer.appendChild(retractIcon);

  retractIcon.addEventListener("click", retractContainer);
}
