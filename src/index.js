import "./style.css";

import { onLoadBehavior, changeUoM, changeCity } from "./localApi";
import { UoM, cityChangeBtn, cityInput } from "./renderStuff";

onLoadBehavior();

UoM.addEventListener("change", changeUoM);
cityChangeBtn.addEventListener("click", changeCity);
cityInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    changeCity();
  }
});

//TO DO:
// hide apiKey;VV
// finish styling;VV
// gitHub upload;
