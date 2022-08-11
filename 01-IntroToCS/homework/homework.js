'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
let numInvertido= num.split('').reverse();
let decimal=0;
for (let i = 0; i < numInvertido.length; i++) {
  decimal += ((numInvertido[i]) * (Math.pow(2,i)));
  
}return decimal;


}

function DecimalABinario(num) {
  // tu codigo aca
let binario='';
while (num > 0) {
  binario +=( num % 2);
  num= Math.floor(num/2)
} return binario.split('').reverse().join('')



}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}