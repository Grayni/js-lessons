function getWords(str) {
  function wordFunc(str) {
    return {
      [Symbol.iterator]: function(){
        let value = ''

        return {
          next() {
            if ((/[a-zа-я]+/i).exec(str) === null) {
              return {done: true, value}
            } else {
              value = (/[a-zа-я]+/i).exec(str)[0]
              str = str.replace(value, x => x = '')

              return {done: false, value}
            }
          }
        }
      }
    }
  }

  for (let word of wordFunc(str)) {
    console.log(word)
  }
}

function getWords2(str) {
  function* getWordsGen(str) {
    let value = ''
    while((/[a-zа-я]+/i).exec(str) !== null) {
      value = (/[a-zа-я]+/i).exec(str)[0]
      str = str.replace(value, x => x = '')
      yield value
    }
  }

  for (let word of getWordsGen(str)) {
    console.log(word)
  }
}

function wordsCount(str) {
  function wordFunc(str) {
    return {
      [Symbol.iterator]: function(){
        let i = 0

        return {
          next() {
            if ((/[a-zа-я]+/i).exec(str) === null) {
              return {done: true, value: i}
            } else {
              let value = (/[a-zа-я]+/i).exec(str)[0]
              str = str.replace(value, x => x = '')
              i++
              return {done: false, value: i}
            }
          }
        }
      }
    }
  }

  for (let word of wordFunc(str)) {
    console.log(word)
  }
}

function wordsCount2(str) {
  function* wordFunc(str) {
    let i = 0
    while((/[a-zа-я]+/i).exec(str) !== null) {
      let value = (/[a-zа-я]+/i).exec(str)[0]
      str = str.replace(value, x => x = '')
      yield ++i
    }
  }

  for (let count of wordFunc(str)) {
    console.log(count)
  }
}

export {getWords, wordsCount, getWords2, wordsCount2}