/*Escreva uma função que receb uma string, verifica se ela possui a mesma quantidade de cada letra que
* a compões e retorna true caso possua ou false caso não possua.*/

function verificaString(str){
    const strcount = str.split('');
    const palavrasRepetidas = [];
    for (let i =0; i < strcount.length; i++){
        const palavra = strcount[i];
            if(palavrasRepetidas.indexOf(palavra) === -1){
                if (strcount.indexOf(palavra, i + 1) !== -1){
                    palavrasRepetidas.push(palavra);
                }
            }
    }

    return '';

}

console.log(verificaString('ssdd'));
/*console.log(verificaString('QQwweerrttyy'));*/

/*o indice de s === d ser for true se nao false*/

/*Soma os indices e comparar se são iguais*/
/*contar quantas vezes aparece e verificar se são iguais*/

const str = 'ssddad'.split('');
const array = [];
for (let i =0; i < str.length; i++) {
    const palavra = str[i];
    console.log(str.indexOf(palavra))
}