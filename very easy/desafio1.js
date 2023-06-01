/*A academia de oficiais da federação precisa da sua ajuda para criar um programa que automatize os calculos
* das medias de alunos e turmas para melhor acompanhar os seus desempenhos. Este programa será incorporado
* em seu sistema principal, portanto você precisa apenas desenvolver a função que calcula a média. No entanto
* a função deve ser capaz de funcionar com qualquer numero de alunos ou turmas.*/

//Desafio -> Escrever uma função que recebe um número qualquer de números interios e retorne a media aritmética entre eles.
//Testes -> - Entrada: (10,9,6,8,9,1,5,7) saida: 6.875

function calculaMedia(...numbers){
    let sum = 0;
    for (const n of numbers){
        sum += n;
    }
    const media = sum / numbers.length;
    return console.log(`A media dos alunos é: ${media}.`);
}

calculaMedia(10,9,6,8,9,1,5,7);
calculaMedia(2,5,7,1,-2);
calculaMedia(10,10,10,10,9);
calculaMedia(25,75);
