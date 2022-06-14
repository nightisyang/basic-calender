const display = document.getElementById("display");

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const months = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];
const last = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let date = 0;

let text = "";
let curDay;
let day = 0;
let skip = 0;
let runningCount = 0;

for (let m = 0; m < months.length; m++) {
  let lastDateofMonth = last[m];

  text += months[m] + "\n" + "<br>";
  text += [...days] + "\n" + "<br>";

  for (d = 1; d <= lastDateofMonth; d++) {
    runningCount++;
    if (d === 1 && skip !== 0 && skip !== 7) {
      for (let i = skip - 1; i > -1; i--) {
        text += last[m - 1] - i + "\n";
      }
    }

    if (d === lastDateofMonth) {
      text += d + "<br> <br>";
      skip = days.indexOf(curDay) + 1;
    } else if (runningCount % 7 === 0) {
      text += d + "<br>";
      day = 0;
    } else {
      text += d + "\n";
    }

    curDay = days[day];
    day++;
  }
}

display.innerHTML = text;
