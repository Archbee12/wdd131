// const windChill = document.querySelector('#windchill');

// // Calling the Windchill function

// function windChill(temp, speed) {
//   if (temp <= 50 && speed > 3)
//     return (35.74 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) +
//     0.3965 * temperature * Math.pow(speed, 0.16));
//     windChillElement.textContent = windChill.toFixed(1) + "°C";
//   else {
//     windChill.innerHtml = "N/A";
//   }
// }

const temp = parseFloat(document.querySelector('.temp').textContent);
const wind = parseFloat(document.querySelector(".wind").textContent);
const windChill = document.querySelector('.windchill');

function calculateWindChill() {
  if (temp <= 50 && wind > 3) {
    const windChillNum = 35.74 + 0.6215 * temp - 35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16);
    windChill.innerHTML = windChillNum.toFixed(2) + "&deg;F";
  } else {
    document.querySelector(".windchill").textContent = "N/A";
  }
}
