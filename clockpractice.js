const secondHand = document.getElementById("second");
const minuteHand = document.getElementById("minute");
const hourHand = document.getElementById("hour");

const clockCountForSeconds = (i) => {
  let sec = 0;
  if (i > 0) {
    secondHand.style.transform = `rotate(${secondRotation(sec)}deg)`;
    sec++;

    i--;
    setTimeout(() => {
      clockCount(i);
    }, 1000);
  }
};

const secondRotation = (x) => {
  return (x / 60) * 360;
};

clockCountForSeconds(secondRotation(60));
