/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// 20 meters = 65.616 feet | 20 feet = 6.096 meters
// 20 liters = 5.284 gallons | 20 gallons = 75.708 liters
// 20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos

const $inputText = document.getElementById('inputText')
const $inputBtn = document.getElementById('inputBtn')
const $displayLength = document.getElementById('display-length')
const $displayVolume = document.getElementById('display-volume')
const $displayMass = document.getElementById('display-mass')

$inputBtn.addEventListener('click', function () {
  let number = $inputText.value

  //render lenth
  $displayLength.innerHTML = `
  ${number} meters = ${(number * 3.281).toFixed(3)} feet | ${number} feet = ${(
    number / 3.281
  ).toFixed(3)} meters
  `

  //render volume
  $displayVolume.innerHTML = `
  ${number} liters = ${(number * 0.264).toFixed(
    3
  )} gallons | ${number} gallons = ${(number / 0.264).toFixed(3)} liters
  `

  //render mass
  $displayMass.innerHTML = `
  ${number} kilos = ${(number * 2.204).toFixed(
    3
  )} pounds | ${number} pounds = ${(number / 2.204).toFixed(3)} kilos
  `
})
