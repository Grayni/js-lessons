
const $start = document.querySelector('#start')
const $game = document.querySelector('#game')

$start.addEventListener('click', gameStart)


function gameStart(event) {
  $game.style.backgroundColor = '#fff'
  event.target.style.display = 'none'
  renderBox()
}

function gameEnd() {

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
}

function valueRandom(min, max) {
  return Math.round(min + Math.random()*((max - min)))
}