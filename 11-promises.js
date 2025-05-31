function randomNumber(max,min) {
    max*=1000;
    min*=1000;
    return Math.floor(Math.random() * (max - min)) + min};


function esperarAi(msg,tempo){
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject('Mensagem precisa ser uma string');
        }
        setTimeout(() => {;
        resolve(msg);
    }, tempo);})};

esperarAi('Mensagem 1', randomNumber(5,1)).then(resposta=>{console.log(resposta);
    return esperarAi("frase2",randomNumber(5,1));
}).then(resposta2=>{console.log(resposta2);
    return esperarAi("frase3",randomNumber(5,1));
}).then(resposta3=>{console.log(resposta3);
    return esperarAi("frase4",randomNumber(5,1));
}).then(resposta4=>{console.log(resposta4);
    return esperarAi("frase5",randomNumber(5,1));
}).then(resposta5=>{console.log(resposta5);
    return esperarAi("frase6",randomNumber(5,1));
}).catch(e => { console.log('Erro:', e); });

esperarAi('Mensagem 2', randomNumber(5,1)); 
esperarAi('Mensagem 3', randomNumber(5,1));
