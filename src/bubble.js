function bubble() {
  let boxes = document.querySelectorAll('.box')
  console.log('test:',boxes)

  for (let index = 0; index < boxes.length; index++) {
    const box = boxes[index];
    
    box.addEventListener('click', function() {
      if (this.id === 'box-2') {
        event.stopPropagation()
      }
      console.log(this.id)
    }, true)
  }
}

export {bubble}