function myMap() {
  return Array.prototype.myMap = function(callback) {
    let result = [], array = this
    console.log(callback)
    for (let i = 0; i < array.length; i++) {
      result.push(callback(array[i], i, array))
    }

    return result
  }
}

export {myMap}