let degreeForm = document.querySelector(".degree-form");
let degreeTaker = document.querySelector(".degree-taker");
let degreeSelector = document.querySelector(".degree-selector");
let resultTakerFirst = document.querySelector(".list-result-taker-left");
let resultTakerSecond = document.querySelector(".list-result-taker-right");

let celsiusToKelvin = 274.15;
let kelvinToCelsius = -272.15;
let celsiusToFahrenheit = 33.8;
let fahrenheitToCelsius = -17.222;
let fahrenheitToKelvin = 255.93;
let kelvinToFahrenheit = -457.87;

degreeForm.addEventListener("submit", function(evt){
  evt.preventDefault()

  let degreeTakerValue = degreeTaker.value;
  degreeTaker.value = "";

  let degreeSelectorValue = degreeSelector.value;

  if (degreeSelectorValue = "none") {
    resultTakerFirst.textContent = `Please select measure!`;
    resultTakerSecond.textContent = `Please select measure!`;
  } else if (degreeSelectorValue = "celsius") {
    resultTakerFirst.textContent = `Celsius to Kelvin: ${(celsiusToKelvin * degreeTakerValue).toFixed(1)}`;
    resultTakerSecond.textContent = `Celsius to Fahrenheit: ${(celsiusToFahrenheit * degreeTakerValue).toFixed(1)}`;
  } else if (degreeSelectorValue = "kelvin") {
    resultTakerFirst.textContent = `Kelvin to Celsius: ${(kelvinToCelsius * degreeTakerValue).toFixed(1)}`;
    resultTakerSecond.textContent = `Kelvin to Fahrenheit: ${(kelvinToFahrenheit * degreeTakerValue).toFixed(1)}`;
  } else if (degreeSelectorValue = "fahrenheit") {
    resultTakerFirst.textContent = `Fahrenheit to Celsius: ${(fahrenheitToCelsius * degreeTakerValue).toFixed(1)}`;
    resultTakerSecond.textContent = `Fahrenheit to Kelvin: ${(fahrenheitToKelvin * degreeTakerValue).toFixed(1)}`;
  }
});