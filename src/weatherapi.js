import { forecast } from "./localApi";

const weatherApiFreeKey = process.env.WEATHER_API_KEY;

export let apiData;

export async function getCityOnLoad() {
  // const t1 = new Date();
  const ip = await getIp();
  // const t2 = new Date();
  // console.log("getIp", t2 - t1);
  // console.log("ip", ip);
  const responseLoc = await fetch(
    `https://api.weatherapi.com/v1/ip.json?key=${weatherApiFreeKey}&q=${ip}`
  );
  const ipData = await responseLoc.json();
  // const t4 = new Date();
  // console.log("getCity", t4 - t2);
  // console.log("ip+city", t4 - t1);
  // console.log("city", ipData);
  return ipData.city;
}

export async function fetchForecast(location) {
  try {
    // const t1 = new Date();
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${weatherApiFreeKey}&q=${location}&days=3`
    );
    const forecastData = await response.json();
    apiData = forecastData;
    // console.log("apiData", forecastData);
    // const t2 = new Date();
    // console.log("forecast", t2 - t1);
    return forecastData;
  } catch (error) {
    console.log(error.status);
  }
}

//SO FUCKING SLOW(range from 150 to 250 ms with my connection & no throttle
//while all the rest of fetch requests(getCity&fetchForecast) combined are 30 to 90 ms),
//but i'm too lazy to spend hours finding more optimized solution, since it is
//only needed once
async function getIp() {
  const response = await fetch("https://api.ipify.org?format=json");
  const ipObj = await response.json();
  const ip = ipObj.ip;
  return ip;
}
