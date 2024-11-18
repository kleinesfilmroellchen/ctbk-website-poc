/*
	Include calendar | Chaostreff Backnang | @paddy
*/

export default function hackcal(e, p = 1) {
  //   var cal_uri = "https://chaostreff-backnang.de/hackcal/?period=" + p;
  var cal_uri = "/hackcal";
  var uri_regex =
    /(https?:\/\/([-\w\.]+)+(:\d+)?(\/([\w\/\-_\.\:]*(\?\S+)?)?)?)/gi;

  fetch(cal_uri)
    .then((res) => res.json())
    .then((data) => {
      var items = [];
      Object.keys(data).forEach(function (date) {
        var day = new Date(date);
        items.push(
          "<tr class='' data-date='" +
            date +
            "'><span>" +
            day.toLocaleDateString(true, {
              weekday: "short",
              day: "numeric",
              month: "long",
              year: "numeric",
            }) +
            "</span></tr>"
        );
        Object.keys(data[date]).forEach(function (uid) {
          var event = data[date][uid];
          var location = event.location
            ? event.location
                .replace(/\n/g, "<br>")
                .replace(uri_regex, "<a href='$1' target='_blank'>$1</a>")
            : "";
          var description = event.description
            ? event.description
                .replace(/\n/g, "<br>")
                .replace(uri_regex, (url) => {
                  event.summary = `<a href='${url}' target='_blank'>${event.summary}</a>`;
                  return "";
                })
            : "";
          var categories = event.categories
            ? "<i>" + event.categories.replace(",", "</i> <i>") + "</i>"
            : "";
          items.push(
            "<tr data-uid='" +
              uid +
              "'><span>" +
              event.datestr +
              "</span><span><b>" +
              event.summary +
              "</b> | " +
              location +
              "<br/>" +
              description +
              categories +
              "</span></tr>"
          );
        });
      });
      document.querySelector("#dbkcalendar").innerHTML = items.join("");
    });
}
