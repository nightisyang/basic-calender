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

// text to be inserted in DOM
let text = "";

// tracks current day
let curDay;
let day = 0;

// skips number of days in a new month
let skip = 0;

// if modulo %7 = 0, start a new week, should add up to 365 days
let runningCount = 0;

for (let m = 0; m < months.length; m++) {
  let lastDateofMonth = last[m];

  // display current month
  text += months[m] + "\n" + "<br>";

  // display days, monday to sunday
  text += [...days] + "\n" + "<br>";

  // display days in a month, up until end of month
  for (d = 1; d <= lastDateofMonth; d++) {
    // increase count per day
    runningCount++;

    // if it's the starting of the month and there are skipped days, add some some buffer to line up date to the correct date
    if (d === 1 && skip !== 0 && skip !== 7) {
      for (let i = skip; i > 0; i--) {
        text += last[m - 1] - i + "&nbsp";
      }
    }

    // at the last day of the month, insert break and get the index of the current day, to be used in the if statement above
    if (d === lastDateofMonth) {
      text += d + "<br> <br>";
      skip = days.indexOf(curDay) + 1;

      // if it is the end of the week, add break and reset day to 0 i.e. monday
    } else if (runningCount % 7 === 0) {
      text += d + "<br>";
      day = 0;

      // or else, for all other days, just print date with some spacing
    } else {
      text += d + "&nbsp";
    }

    curDay = days[day];
    // add increment to day for the next date loop
    day++;
  }
}

display.innerHTML = text;
