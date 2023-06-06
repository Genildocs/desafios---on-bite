/*Escreva uma função que receb uma string, verifica se ela possui a mesma quantidade de cada letra que
* a compões e retorna true caso possua ou false caso não possua.*/

function verificaString(str){
    const objetoString = {};
    for (let i= 0; i < str.length; i++){
        const palavra = str[i];
        if (objetoString[palavra]){ //Verifica se algum valor de palavra existe como propriedade no objeto.
            objetoString[palavra]++ //incrementa o valor cada vez que um valor é repetido em palavra.
        }else {
            objetoString[palavra] = 1; //Se não existir ele adicionar junto com o valor 11.
        }
    }
    const valoresIguais = Object.values(objetoString).every(valor => valor === Object.values(objetoString)[0]);

    return valoresIguais;
}
console.log(verificaString('ssd'));
console.log(verificaString('This is Thee'));
console.log(verificaString('gaga'));
console.log(verificaString('QQwweerrttyy'));

/*o indice de s === d ser for true se nao false*/

/*Soma os indices e comparar se são iguais*/
/*contar quantas vezes aparece e verificar se são iguais*/



