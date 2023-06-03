/*Escreva uma função que recebe uma string contendo um nome completo e retorna uma string com todos os nomes, execto
* o ultimo, abreviados e o ultimo nome em letras maiusculas antes das abreviações separado por virgula.*/

function formataName(str){
    const strToUpperCase = str.toUpperCase().split(' ');
    const lastName = strToUpperCase[strToUpperCase.length -1]
    const firstword = [];
    for (const i of strToUpperCase){
        firstword.push(i.slice(0,1))
    }

    const newString = `Autor: ${lastName}, ${firstword.join('. ').slice(0,-1)}`;
    return newString;

}

console.log(formataName('John Ronald Reuel Tolkien'))
console.log(formataName('George Raymond Richard Martin'))
console.log(formataName('Isaac Larrubia Ferreira Pontes'))
console.log(formataName('crhistopher james paolini'))
/*Saida: TOLKIEN, J.R.R.*/
