/*Escreva uma função que receba um par ordenado (x,y) e retorna um array de pares (x,y)
* onde cada um deles possui um x e y menor ou igual ao par recebido em ordem crescente.
* Os pares devem ser ordenados de forma que primeiro aumente o valor de y e depois o valor de x. Apenas
* o quadrante onde x e y são positivos deve ser considerado.*/

function ordenacao(array){

    if(array[0] && array[1] < 0){
        return array = []
    }

    return 0

}

console.log(ordenacao([2,2]))
console.log(ordenacao([-3,-3]))

