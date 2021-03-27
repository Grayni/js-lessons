import "regenerator-runtime/runtime.js";
import Timer from './timer.js'
let commonCounter = require('./commonjs-test');
import * as esCounter from './es-test';
import { range, testGen, rangeGen } from './range';
import {getWords, wordsCount, getWords2, wordsCount2} from './count-words'
import {myMap} from './prototype'
import {bubble} from './bubble'

window.addEventListener('load', function(){

  // getWords('  Всем  привет! Ура ура! ')
  // wordsCount('  Всем  привет! Ура ура! ')
  //getWords2('  Всем  привет! Ура ура! ')
  //wordsCount2('  Всем  привет! Ура ура! ')

  // myMap()
  // let arr = [1, 2, 3, 4]
  // arr = arr.myMap(x => x + 1)
  // console.log(arr)

  //bubble()
})

