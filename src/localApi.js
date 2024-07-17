// import { forecast } from ".";
import { UoM } from "./renderStuff";
import { getCityOnLoad, fetchForecast } from "./weatherapi";
import { renderTodayWeather, renderForecast, cityInput } from "./renderStuff";
import { getUsefulData, forecast } from "./constructors";

// export let forecast;

export function onLoadBehavior() {
  getCityOnLoad()
    .then((l) => fetchForecast(l))
    .then(() => getUsefulData())
    .then(() => {
      renderTodayWeather();
      renderForecast();
    })
    .catch((e) => {
      console.error(e);
    });
}

export function changeUoM() {
  renderTodayWeather();
  renderForecast();
}

export async function changeCity() {
  try {
    const data = await fetchForecast(cityInput.value);
    getUsefulData();
    renderTodayWeather();
    renderForecast();
  } catch (error) {
    console.log({ error });
  }
}
