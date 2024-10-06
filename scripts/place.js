const windC = document.querySelector('#windchill');


// Calling the Windchill function

function windChill(temp, speed) {

  return (35.74 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) +
    0.3965 * temp * Math.pow(speed, 0.16));
}

const temperature = document.querySelector('#temp');
const speed = document.querySelector('#wind');

if (temperature <= 10 && speed > 4.8) {
  windC.innerHTML = windChill(temperature, speed).toFixed(1) + "°C";

} else {
  windC.innerHTML = "N/A";
}
