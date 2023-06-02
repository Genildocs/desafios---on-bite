/*Escreva uma função que recebe um array bidimensional de inteiros e retorna um unico array contendo
* todos os numeros em ordem ascendente.*/

function organizaArray(...arrays){
    const arrayBidimensional = arrays;
    const novoArray = [];
    for (const i of arrayBidimensional){
        novoArray.push(...i)
    }

    return novoArray.sort((a,b)=> a - b);
}

console.log(organizaArray(...[[1,5,3],[4,8],[7,5],[2,6]]))
console.log(organizaArray(...[[1,5,3],[6,19,11],[47,128,5],[1,93,51,42,103]]))
console.log(organizaArray(...[[],[],[]]))
console.log(organizaArray(...[[100,50],[60,100],[20,100,70],[10,40,80,90]]))

