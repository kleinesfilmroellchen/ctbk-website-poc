/*
	Include calendar | Chaostreff Backnang | @paddy
  Modernization by @kleinesfilmroellchen
*/

export default function hackcal(e, p = 1) {
  if (!document.getElementById("dbkcalendar")) return;

  const calendar = document.getElementById("calendar").content.cloneNode(true);
  const calendarDate = document.getElementById("calendar-date");
  const calendarEntry = document.getElementById("calendar-entry");

  const calendarParent = document.getElementById("dbkcalendar");
  const body = calendar.querySelector("tbody");

  // const cal_uri = "https://chaostreff-backnang.de/hackcal/?period=" + p;
  const calUri = "/hackcal";
  fetch(calUri)
    .then((res) => res.json())
    .then((data) => {
      const items = [];
      Object.keys(data).forEach(function (date) {
        const day = new Date(date);

        const dateItem = calendarDate.content.cloneNode(true);
        const timeElement = dateItem.querySelector("time");
        timeElement.innerText = day.toLocaleDateString(true, {
          weekday: "short",
          day: "numeric",
          month: "long",
          year: "numeric",
        });
        timeElement.dateTime = date;
        body.appendChild(dateItem);

        Object.keys(data[date]).forEach(function (uid) {
          const event = data[date][uid];

          const entryItem = calendarEntry.content.cloneNode(true);
          entryItem.querySelector(".calendar-entry").dataset.uid = uid;
          entryItem.querySelector(".time").innerText = event.datestr;

          // use description as link on summary if it's a valid URL
          const summaryItem = entryItem.querySelector(".summary");
          try {
            const descriptionUri = new URL(event.description);
            const descriptionLink = document.createElement("a");
            descriptionLink.href = descriptionUri;
            descriptionLink.target = "_blank";
            descriptionLink.innerText = event.summary;
            summaryItem.appendChild(descriptionLink);
          } catch (e) {
            summaryItem.innerText = event.summary;
            entryItem.querySelector(".description").innerText =
              event.description;
          }

          // self-link location if it's a valid URL
          const locationItem = entryItem.querySelector(".location");
          try {
            const locationUri = new URL(event.location);
            const locationLink = document.createElement("a");
            locationLink.href = locationUri;
            locationLink.target = "_blank";
            locationLink.innerText = event.location;
            locationItem.appendChild(locationLink);
          } catch (e) {
            locationItem.innerText = event.location;
          }

          const categoriesParent = entryItem.querySelector(".categories");
          for (const category of event.categories.split(",")) {
            const categoryItem = document.createElement("em");
            categoryItem.innerText = category;
            categoriesParent.appendChild(categoryItem);
          }

          body.appendChild(entryItem);
        });
      });

      calendarParent.innerHTML = "";
      calendarParent.appendChild(calendar);
    });
}
