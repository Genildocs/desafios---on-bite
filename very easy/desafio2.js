/*Escreva uma função que recebe um numero e retorna uma quantidade equivalente de 'chunks' separados por um traço'-'
* sem utilizar nenhuma estrutura de repetição.*/

//Entrada: (4) saida: 'chunk-chunk-chunk'

function retornaChunck(number){
    let palavra = '';
    for (let i = 0; i < number; i++){
        palavra += 'chunk' + '-';
    }

    console.log(palavra.slice(0,-1))
}

retornaChunck(4)
retornaChunck(1)
retornaChunck(8)
retornaChunck(2)

/*Função recursiva */
function loop(count, palavra=''){ /*Posso usar um argumento como uma variavel com um valor já atribuido.*/
    if (count <=0){
        return palavra.slice(0,-1)
    }
    palavra += 'chunck' + '-';

    return loop(count - 1, palavra);
}

console.log('------')
console.log(loop(2))
console.log(loop(1))
console.log(loop(8))