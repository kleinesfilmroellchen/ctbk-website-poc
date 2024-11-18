import hackcal from "./dbkcalendar.js";

const refreshRate = 60 * 1000;

function checkSpace() {
  const icon = document.getElementById("space-image");
  const stateItem = document.getElementById("space-state");
  const stateLastUpdateItem = document.getElementById("space-last-update");
  let stateText = "",
    stateLastUpdate = "";
  fetch("https://spaceapi.ctbk.de/")
    .then((response) => response.json())
    .then((data) => {
      let openText = "";
      if (data.state.open) {
        openText = "offen";
        icon.src = data.state.icon.open;
      } else {
        openText = "geschlossen";
        icon.src = data.state.icon.closed;
      }
      stateText = `Der Space ist derzeit ${openText}.`;
      const lastchangeString = data.state.lastchange
        ? new Date(data.state.lastchange * 1000).toLocaleString(true, {
            timeStyle: "short",
            dateStyle: "medium",
          })
        : "unbekannt";
      stateLastUpdate = "Letzte Statusänderung: " + lastchangeString;
      console.log("Icon: " + icon.src);
    })
    .catch((error) => {
      icon.src = "/img/unknown.png";
      stateText = "Der Spacestatus ist unbekannt";
      console.error("Error on space state retrieval:", error);
    })
    .then(() => {
      icon.alt = stateText;
      icon.text = stateLastUpdate;
      stateItem.innerText = stateText;
      stateLastUpdateItem.innerText = stateLastUpdate;
    });
}

const interval = setInterval(() => {
  checkSpace();
}, refreshRate);

document.addEventListener("DOMContentLoaded", checkSpace);
document.addEventListener("DOMContentLoaded", hackcal);

document
  .getElementById("expand-calendar")
  ?.addEventListener("click", () => hackcal(null, 6));
