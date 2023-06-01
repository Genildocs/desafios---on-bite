/* Escreva uma função que recebe uma string e retorna a maior letra segundo a ordem alfabetica em minusculo. 
Assuma que a string não possui nenhuma letra com acento, numero ou caractere especial, apenas letras e espaços. */

function returnaLetra(str){
    const string = str.toLowerCase().split('').sort();
    return `A maior letra do alfabeto nessa string é: (${string[string.length -1]}).`;
}

console.log(returnaLetra('Hello'));
console.log(returnaLetra('lorem ipsum'));
console.log(returnaLetra('vaca'));
console.log(returnaLetra('May the force be with you'));