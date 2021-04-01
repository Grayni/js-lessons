
const $start = document.querySelector('#start')
const $game = document.querySelector('#game')
let $time = document.querySelector('#time')
const $inputTime = document.querySelector('#game-time')
let $result = document.querySelector('#result-header')
let counter = 0

$start.addEventListener('click', gameStart)

$inputTime.addEventListener('input', setValue)

function setValue() {
  $time.textContent = parseInt($inputTime.value).toFixed(1)
}

function gameStart(event) {
  $game.style.backgroundColor = '#fff'
  $result.classList.add('hide')
  event.target.style.display = 'none'
  renderBox()
  timer(event)
}

function gameEnd(event) {
  $game.style.backgroundColor = '#ccc'
  event.target.style.display = 'block'
  $game.children[0].remove()
  $time.textContent = parseInt($inputTime.value).toFixed(1)
  $result.classList.remove('hide')
  $result.children[0].textContent = counter
  counter = 0
  return 
}

function timer(event) {
  const runTimer = setInterval(() => {
    $time.textContent = parseFloat($time.textContent - .1).toFixed(1)
    if (parseFloat($time.textContent)<=0) {
      clearInterval(runTimer)
      return gameEnd(event)
    }
  }, 100)
}

function renderBox() {
  $game.insertAdjacentHTML('afterbegin', '<div id="box"></div>')
  const $box = document.querySelector('#box')
  const side = valueRandom(30, 100)
  const gameSize = $game.getBoundingClientRect()
  const maxTop = gameSize.height - side
  const maxLeft = gameSize.width - side

  const styleBox = {
    width: `${side}px`,
    height: `${side}px`,
    backgroundColor: '#' + valueRandom(0x000, 0xfff).toString(16),
    position: 'absolute',
    top: valueRandom(0, maxTop) + 'px',
    left: valueRandom(0, maxLeft) + 'px',
    cursor: 'pointer'
  }

  Object.assign($box.style, styleBox)

  $box.addEventListener('click', boxFix)
}

function boxFix(event) {
  event.target.remove()
  renderBox()
  countClick()
}

function countClick() {
  counter++
  console.log(counter)
}

function valueRandom(min, max) {
  return Math.round(min + Math.random()*((max - min)))
}