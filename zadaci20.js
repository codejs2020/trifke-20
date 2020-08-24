// Zadatak 1
function addZeroes(number, zeroes) {
  let num = number + ''
  let zer = ''
  for (let i = 0; i < zeroes - num.length; i++) {
    zeroes += '0'
  }
  return zeroes + num
}
//Zadatak 2

function vowelCount(inputText) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  let count = 0

  for (let letter of inputText) {
    if (vowels.includes(letter)) {
      count++
    }
  }
  return count
}
//zadatak 6 (stoperica)
let startingTime = document.getElementById('stopwatch')
let start = document.getElementById('start')
let pause = document.getElementById('stop')
let clear = document.getElementById('clear')
let seconds = 0,min = 0,hours = 0



function add() {

  seconds++
  if (seconds >= 60) {
    seconds = 0
    min++
    if (min >= 60) {
      min = 0
      hours++
    }
  }
  startingTime.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (min ? (min > 9 ? min : "0" + min) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

  timer();
}

function timer(){
  let t= setTimeout(add,1000)
}

//start button
start.onclick = timer

//stop button
pause.onclick = function(){
  clearTimeout(t)
}
//clear button
clear.onclick = function(){
  startingTime.textContent ="00:00:00"
  seconds = 0;
  min = 0;
  hours = 0;
}



