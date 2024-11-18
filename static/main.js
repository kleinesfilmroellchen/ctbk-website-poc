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
      const lastchangeString = data.state.lastchange
        ? new Date(data.state.lastchange * 1000).toLocaleString(true, {
            timeStyle: "short",
            dateStyle: "medium",
          })
        : "unbekannt";
      icon.title = "Letzte Statusänderung: " + lastchangeString;
      console.log("Icon: " + icon.src);
    })
    .catch((error) => {
      icon.src = "/img/unknown.png";
      icon.alt = "Der Spacestatus ist unbekannt";
      icon.title = "";
      console.error("Error on space state retrieval:", error);
    });
}

const interval = setInterval(() => {
  checkSpace();
}, refreshRate);

document.addEventListener("DOMContentLoaded", checkSpace);
document.addEventListener("DOMContentLoaded", hackcal);
