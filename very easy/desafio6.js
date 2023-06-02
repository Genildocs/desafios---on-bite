/*Escreva uma função que recebe uma string e retorn cada palavra da string invertida e em letras maiusula, porém
* com as palavras na mesma ordem. assuma que a string não possui nenhuma letra com acento, numero ou caractere especial,
* apenas letras e espaçõs.*/

function inverteString(str){
    const stringArray = str.toLowerCase().split(' ');
    const stringInvertida = [];
    for (let i = 0; i < stringArray.length; i++){
        stringInvertida.push(stringArray[i].split('').reverse().join(''))
    }

    return stringInvertida.join(' ');
}

console.log(inverteString('Lorem ipsum dolore sec avanti'));
console.log(inverteString('This is an apple'));
console.log(inverteString('Gosto de paçoca'));
console.log(inverteString('It s over nine thousand'));




