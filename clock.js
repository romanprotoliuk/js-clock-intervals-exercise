/* VARIABLES - APPLICATION STATE (change)*/
let seconds = 0;
let minutes = 0;
let hours = 0;

/* DOM Stuff */
const secondHand = document.getElementById("second");
const minuteHand = document.getElementById("minute");
const hourHand = document.getElementById("hour");

/* Program logic */
const clockRun = () => {
  console.log(seconds);
  // calculate seconds to degress for the css rotation
  const secToDeg = (seconds / 60) * 360;
  const minToDeg = (minutes / 60) * 360;
  const hourToDeg = (hours / 12) * 360;

  // grab the sec hand element and update the css
  secondHand.style.transform = `rotate(${secToDeg}deg)`;
  minuteHand.style.transform = `rotate(${minToDeg}deg)`;
  hourHand.style.transform = `rotate(${hourToDeg}deg)`;

  // increment the time
  seconds++;
  if (seconds === 60) {
    // a minute has passed
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    // an hour has passed
    hours++;
    minutes = 0;
  }
};

setInterval(clockRun, 1000); //

/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */
// my first solution

// let sec = 0;
// let min = 0;
// let hr = 0;

// // if else statement
// if (sec % 60 === 0) {
//   sec = 0;
//   //   min++;
// }

// const secondRotation = (x) => {
//   return (x / 60) * 360;
// };

// const minuteRotation = (x) => {
//   return (x / 60) * 360;
// };

// const hourRotation = (x) => {
//   return (x / 12) * 360;
// };

// // setTimeOut
// const clockCount = (i) => {
//   if (i > 0) {
//     secondHand.style.transform = `rotate(${secondRotation(sec)}deg)`;
//     minuteHand.style.transform = `rotate(${minuteRotation(min)}deg)`;
//     hourHand.style.transform = `rotate(${hourRotation(hr)}deg)`;
//     sec++;
//     min++;
//     hr++;

//     i--;
//     setTimeout(() => {
//       clockCount(i);
//     }, 1000);
//   } else {
//     console.log("done");
//   }
// };

// clockCount(secondRotation(60));

/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */
