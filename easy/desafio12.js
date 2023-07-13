/*Escreva uma função que receba um valor e retorne a quantidade de cada moeda para se chegar ao valor.
* Deve-se sempre priorizar as moedas de maior valor(o maximo possivel de moedas é 500, depois o maximo possivel de moedas de 100, etc*/
/*Exemplo: Entrada(478) saida: {'1':3,'5':0,'10':0.'25:3,'100':4,'500':0}*/

// function calculaMoeda(value){
//     const cedulas = [1,5,10,25,100,500].reverse();
//     const resultado = []
//     let valor = value
//     let acc = 0
//     for (let i = 0; i < cedulas.length; i ++){
//         const cedulaAtual = cedulas[i]
//         if (valor >= cedulaAtual){
//             const quantidadeCedulas = Math.floor(valor/cedulaAtual)
//             valor -= cedulaAtual * quantidadeCedulas;
//             acc += quantidadeCedulas;
//             for (let j = 0; j < quantidadeCedulas; j++) {
//             resultado.push(cedulaAtual); // Adiciona as cédulas ao resultado
//       }
//         }
//     }
//
//    return resultado
//
// }
//
// console.log(calculaMoeda(478))

/*Quantas cedulas eu preciso pra chegar a 478*/
/*Preciso que o loop pecorra cada valor do array e verifique se dá o valor*/
/*Quantos ceculas preciso pra dá o valor de 478*/


/*Resolução*/

function contaCedulas(num){
    const cedulas = {
        '500': 0,
        '100': 0,
        '25': 0,
        '10': 0,
        '5': 0,
        '1': 0
    };

    let rest = num;

    cedulas['500'] = Math.floor(rest / 500);
    rest -= 500 *  Math.floor(rest / 500);

    cedulas['100'] = Math.floor(rest / 100);
    rest -= 100 *  Math.floor(rest / 100);

    cedulas['25'] = Math.floor(rest / 25);
    rest -= 25 *  Math.floor(rest / 25);

    cedulas['10'] = Math.floor(rest / 10);
    rest -= 10 *  Math.floor(rest / 10);

    cedulas['5'] = Math.floor(rest / 5);
    rest -= 5 *  Math.floor(rest / 5);

    cedulas['1'] = Math.floor(rest / 1);
    rest -= 1 *  Math.floor(rest / 1);


    return cedulas
}

console.log(contaCedulas(51))

