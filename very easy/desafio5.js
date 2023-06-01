/* Escreva uma função que recebe uma string e retorna a maior letra segundo a ordem alfabetica em minusculo. 
Assuma que a string não possui nenhuma letra com acento, numero ou caractere especial, apenas letras e espaços. */

function returnaLetra(str){
    const alphabets = 'a b c d e f g h i j k l m n o p q r s t u v w x y z'.split(' ');
    
    for(let i= 0; i < alphabets.length; i++){
        console.log(i);
    }
}

console.log(returnaLetra('Hello'));
console.log(returnaLetra('lorem ipsum'));
