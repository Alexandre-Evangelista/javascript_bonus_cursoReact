//funçoes sao objetos de primeira classe
function soma (a,b) {
  return a + b;
}
function falaOi () {
  console.log('Oi');
}
const falahello = function() {
  console.log('Hello');
}
function executaFuncao(funcao) {
  if (typeof funcao === 'function') {
    funcao();
  }
}

const dividir = (a, b)=> {
  return a / b;
}


executaFuncao(falaOi); // Oi
console.log(dividir(10,2)); // 5
falaOi(); // Oi
console.log(soma(2,3)); // 5
falahello(); // Hello