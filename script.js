const hourHand = document.querySelector(".hours");
const minHand = document.querySelector(".min");
const secHand = document.querySelector(".sec");

function runClock() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const hourRotation = (hours % 12 + minutes / 60) * 30; // 360/12 = 30
  const minuteRotation = (minutes + seconds / 60) * 6;   // 360/60 = 6
  const secondRotation = seconds * 6;                    // 360/60 = 6

  hourHand.style.setProperty('--rotation', hourRotation);
  minHand.style.setProperty('--rotation', minuteRotation);
  secHand.style.setProperty('--rotation', secondRotation);
}

setInterval(runClock, 1000);
runClock();
