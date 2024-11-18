import hackcal from "./dbkcalendar.js";

const refreshRate = 60 * 1000;

function checkSpace() {
  const icon = document.getElementById("space-image");
  let openText = "";
  fetch("https://spaceapi.ctbk.de/")
    .then((response) => response.json())
    .then((data) => {
      if (data.state.open) {
        openText = "Offen";
        icon.src = data.state.icon.open;
      } else {
        openText = "Geschlossen";
        icon.src = data.state.icon.closed;
      }
      icon.alt = "Der Space ist " + openText;
      console.log("Icon: " + icon.src);
    })
    .catch((error) => {
      console.error(error);
    });
}

const interval = setInterval(() => {
  checkSpace();
}, refreshRate);

document.addEventListener("DOMContentLoaded", checkSpace);
document.addEventListener("DOMContentLoaded", hackcal);
