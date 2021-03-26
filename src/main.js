import "regenerator-runtime/runtime.js";
import Timer from './timer.js'
let commonCounter = require('./commonjs-test');
import * as esCounter from './es-test';
import { range, testGen, rangeGen } from './range';
import {getWords, wordsCount, getWords2, wordsCount2} from './count-words'


window.addEventListener('load', function(){

  // getWords('  Всем  привет! Ура ура! ')
  // wordsCount('  Всем  привет! Ура ура! ')
  //getWords2('  Всем  привет! Ура ура! ')
  wordsCount2('  Всем  привет! Ура ура! ')
})

