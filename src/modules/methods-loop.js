const difMethods = function() {
  const array = ['a','b','c','d','e','f']
  const arrBox = []
  let str = ''

  // 1. map
  const arr = array.map(x => x.toUpperCase()) // new array
  console.log(arr)

  // 2. forEach
  const arr2 = array.forEach(function(x) { // performs func on every element for new arr or variable
    arrBox.push(x+'d')
    str += x
  })
  console.log(arrBox)
  console.log(str)

  // 3. reduce
  const arr3 = array.reduce((x, y, z) => x + '-' + y) // retrun new value with concatenate elements
  console.log(arr3)
}

export {difMethods}