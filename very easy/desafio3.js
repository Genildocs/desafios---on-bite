/*Escreva uma função que recebe um array e retorna um novo array com todas as posições invertidas do original
* sem altera-lo. Não utilize os metodos do objeto global array do javascript(reverse, map, for each. etc)*/

function inverteArray(...parameters){
    const arrayList = parameters;
    let newArrayList = [];
    for (let i = arrayList.length -1; i >= 0; i--){
        newArrayList.push(arrayList[i]);
    }

    return newArrayList;

}

console.log(inverteArray(0,9,6,8,9,1,5,7,10,15,30,155,255,2000,136,580));
inverteArray('Oh','Hi','Mark');
inverteArray(false,true,true,true);
inverteArray('it\s', 'not', 'it\s');