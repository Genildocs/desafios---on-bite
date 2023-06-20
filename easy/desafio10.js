'use strict'
/*Escreva uma função que recebe um numero e retorna o seu fatorial sem utilizar nenhuma estrutura de repetição.
* o fatorial de um numero é igual a multiplicação de todos os inteiros positivios menores ou iguais a ele.
* Ela deve ser capaz de retornar numeros interios corretos mesmo para valores altos.*/

function fatorial(number){

     if (number === 0n){
          return 1n
     }else{
         return  number * fatorial(number - 1n)
     }

}

console.log(fatorial(3n))
console.log(fatorial(5n))
