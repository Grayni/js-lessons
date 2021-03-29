function objectProperties() {
  let obj1 = {
    name: 'Uriy',
    age: '29'
  }

  let obj2 = {
    name: 'Uriy',
    age: '29'
  }

  // 1)
  console.log(obj1 === obj2) // false obj unique

  // 2)
  obj1 = obj2 // assignment
  console.log(obj1 === obj2) // obj1 reference on obj2

  // 3) if obj1 = obj2
  obj1.name = 'Artem'
  console.log(obj2.name) // Artem // Because, obj2 reference on obj1 // two names for the object
}

export {objectProperties}