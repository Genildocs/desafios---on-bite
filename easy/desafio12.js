/*Escreva uma função que receba um valor e retorne a quantidade de cada moeda para se chegar ao valor.
* Deve-se sempre priorizar as moedas de maior valor(o maximo possivel de moedas é 500, depois o maximo possivel de moedas de 100, etc*/
/*Exemplo: Entrada(478) saida: {'1':3,'5':0,'10':0.'25:3,'100':4,'500':0}*/

function calculaMoedas(value){
    const cedulas = [1,5,10,25,100,500];
    const x = {};
    const valor = 0;
    for (const y of cedulas){
        const chave = y;
        Object.assign(x,{[chave]: valor})
    }
    const resultado = []
    for (let i = cedulas.length - 1; i >=0 ; i--){
        const cedulaAtual = cedulas[i];

        while(value >= cedulaAtual){
            resultado.push(cedulaAtual)
            value -= cedulaAtual;
        }
    }

    return resultado

}

console.log(calculaMoedas(1878))


