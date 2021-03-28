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
}

export {objectProperties}