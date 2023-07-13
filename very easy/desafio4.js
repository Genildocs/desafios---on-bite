'use strict'
/* Escreva uma função que recebe um numero inteiro qualquer, eleve ao quadrado cada um de seus algarimos e depois
* concatene o resultado retornando um unico numero inteiro*/

function calculaElevaNumeros(numbers){
    const newNumbers = numbers.toString();
    const arrayNumbers = [];
    for (let i =0; i < newNumbers.length; i++){
        arrayNumbers.push(newNumbers[i]**2)
    }
    return Number(arrayNumbers.join(''));
}

console.log(calculaElevaNumeros(3514))
console.log(calculaElevaNumeros(94571))
console.log(calculaElevaNumeros(24))
console.log(calculaElevaNumeros(745821698))

console.log('**********************************************************************************')

function elevaNumeros(...numbers){
    let array = '';
    numbers.toString().split('').forEach((items)=>{
        array += items ** 2
    })
    return Number(array)
}
console.log(elevaNumeros(3514))
console.log(elevaNumeros(94571))
console.log(elevaNumeros(24))
