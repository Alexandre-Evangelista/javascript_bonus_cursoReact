const numeros=[10,13,15,20,25,30,35,40,45,50];
const pares= numeros.filter((numero)=>numero%2===0);
const dobrar= numeros.map((numero)=>numero*2);
const soma = numeros.reduce((acumulador,numero)=>acumulador+numero,0);
console.log(pares,dobrar,soma);
//retornar a soma do dobro de todos os pares
const somaDobroPares = numeros.filter((numero)=>numero%2===0).map((numero)=>numero*2).reduce((acumulador,numero)=>acumulador+numero,0);
console.log(somaDobroPares);