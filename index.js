function updateWatch() {
  const now = new Date();

  const hours = now.getHours() % 12;
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hourHand = document.getElementById("hour");
  const minuteHand = document.getElementById("minute");
  const secondHand = document.getElementById("second");

  const hourDeg = (hours + minutes / 60) * 360 / 12;
  const minuteDeg = (minutes + seconds / 60) * 360 / 60;
  const secondDeg = seconds * 360 / 60;

  hourHand.style.transform = `rotate(${hourDeg}deg)`;
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
  secondHand.style.transform = `rotate(${secondDeg}deg)`;
}

setInterval(updateWatch, 1000);
updateWatch(); // Initial update