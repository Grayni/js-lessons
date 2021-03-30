
const header = document.querySelector('.local-storage')
const saver = document.getElementById('headerChanger')

saver.addEventListener('click', () => {
  let value = document.getElementById('inputStorage').value

  var obj = {
    text: value
  }

  localStorage.setItem('inputValue', JSON.stringify(obj))
})

window.addEventListener('DOMContentLoaded', () => {
  var obj

  try {
    obj = JSON.parse(localStorage.getItem('inputValue'))
  } catch (error) {
    console.log(error)
  }

  if (obj.text && obj.text.trim()) {
    header.textContent = obj.text
  }
})