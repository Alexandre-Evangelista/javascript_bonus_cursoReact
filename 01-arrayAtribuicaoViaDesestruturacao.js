const numeros=[100,200,300,400,5,6,7,8,9,10];
//const [primeiro, segundo, ...resto] = numeros;
//console.log(primeiro); // 1
//console.log(segundo); // 2
//console.log(resto); // [3, 4, 5, 6, 7, 8, 9, 10]
const[um,,tres,,cinco]=numeros;
console.log(um,tres,cinco); // 100
const numeros2=[[1,2,3],[4,5,6],[7,8,9]];
const[,[,,seis]]=numeros2;
c
console.log(seis); // 6