import { apiData } from "./weatherapi";

export let forecast;

function get24hTime(string) {
  const l = string.length;
  let temp = string.slice(0, l - 3);

  if (string[l - 2] === "P") {
    const arr = temp.split(":");

    for (let i = 0; i < 2; i++) {
      arr[i] = Number(arr[i]);
    }
    arr[0] += 12;
    //i.e. 19:05
    if (arr[1] < 10) {
      arr[1] = "0" + arr[1];
    }
    if (arr[0] === 24) {
      arr[0] = "00";
    }
    temp = arr.join(":");
  }
  return temp;
}

export function getUsefulData() {
  forecast = {
    location: `${apiData.location.name}, ${
      apiData.location.region.split(",")[1] || apiData.location.region
    }, ${apiData.location.country}`, //${apiData.location.name},
    current: {
      iconURL: `https:${apiData.current.condition.icon}`,
      localTime: `${apiData.current.last_updated}`,
      condition: `${apiData.current.condition.text}`,
      humidity: `${apiData.current.humidity}%`,
      windDirection: `${apiData.current.wind_dir}`,
      temperature: {
        m: `${apiData.current.temp_c}°`,
        wtf: `${apiData.current.temp_f}F`,
      },
      windSpeed: {
        m: `${apiData.current.wind_kph}km/h`,
        wtf: `${apiData.current.wind_mph}mi/h`,
      },
      pressure: {
        m: `${apiData.current.pressure_mb}mb`,
        wtf: `${apiData.current.pressure_in}in`,
      },
      precipitation: {
        m: `${apiData.current.precip_mm}mm`,
        wtf: `${apiData.current.precip_in}in`,
      },
    },
    forecastDay: [],
  };
  for (let i = 0; i < 3; i++) {
    forecast.forecastDay.push({
      date: `${apiData.forecast.forecastday[i].date}`,
      rainChance: `${apiData.forecast.forecastday[i].day.daily_chance_of_rain}%`,
      snowChance: `${apiData.forecast.forecastday[i].day.daily_chance_of_snow}%`,
      iconURL: `https:${apiData.forecast.forecastday[i].day.condition.icon}`,
      condition: `${apiData.forecast.forecastday[i].day.condition.text}`,
      sunrise: `${get24hTime(apiData.forecast.forecastday[i].astro.sunrise)}`,
      sunset: `${get24hTime(apiData.forecast.forecastday[i].astro.sunset)}`,
      avgHumidity: `${apiData.forecast.forecastday[i].day.avghumidity}%`,
      maxTemp: {
        m: `${apiData.forecast.forecastday[i].day.maxtemp_c}°`,
        wtf: `${apiData.forecast.forecastday[i].day.maxtemp_f}F`,
      },
      minTemp: {
        m: `${apiData.forecast.forecastday[i].day.mintemp_c}°`,
        wtf: `${apiData.forecast.forecastday[i].day.mintemp_f}F`,
      },
      avgTemp: {
        m: `${apiData.forecast.forecastday[i].day.avgtemp_c}°`,
        wtf: `${apiData.forecast.forecastday[i].day.avgtemp_f}F`,
      },
      maxWind: {
        m: `${apiData.forecast.forecastday[i].day.maxwind_kph}km/h`,
        wtf: `${apiData.forecast.forecastday[i].day.maxwind_mph}mi/h`,
      },
    });
    //sometimes weatherapi does not fill hour array for whatever reason,
    // need to account for that
    if (apiData.forecast.forecastday[i].hour.length !== 0) {
      forecast.forecastDay[i].hour = selectHoursData(i);
    } else forecast.forecastDay[i].hour = [];
  }
  // console.log("forecast", forecast);

  return forecast;
}

function selectHoursData(day) {
  let arr = [];
  for (let j = 0; j < 24; j++) {
    const obj = {
      time: getHours(apiData.forecast.forecastday[day].hour[j].time),
      iconURL: `https:${apiData.forecast.forecastday[day].hour[j].condition.icon}`,
      temp: {
        m: `${apiData.forecast.forecastday[day].hour[j].temp_c}°`,
        wtf: `${apiData.forecast.forecastday[day].hour[j].temp_f}F`,
      },
      windSpeed: {
        m: `${apiData.forecast.forecastday[day].hour[j].wind_kph}km/h`,
        wtf: `${apiData.forecast.forecastday[day].hour[j].wind_mph}mi/h`,
      },
      windDirection: apiData.forecast.forecastday[day].hour[j].wind_dir,
      pressure: {
        m: `${apiData.forecast.forecastday[day].hour[j].pressure_mb}mb`,
        wtf: `${apiData.forecast.forecastday[day].hour[j].pressure_in}in`,
      },
      precipitation: {
        m: `${apiData.forecast.forecastday[day].hour[j].precip_mm}mm`,
        wtf: `${apiData.forecast.forecastday[day].hour[j].pressure_in}in`,
      },
      humidity: `${apiData.forecast.forecastday[day].hour[j].humidity}%`,
      rainChance: apiData.forecast.forecastday[day].hour[j].chance_of_rain,
      snowChance: apiData.forecast.forecastday[day].hour[j].chance_of_snow,
    };
    arr.push(obj);
  }
  // console.log("arr", arr);
  return arr;
}

function getHours(string) {
  let t = string.slice(string.length - 5);
  return t;
}
