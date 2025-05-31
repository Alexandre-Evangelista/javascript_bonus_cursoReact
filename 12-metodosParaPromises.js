function randomNumber(max,min) {
    max*=1000;
    min*=1000;
    return Math.floor(Math.random() * (max - min)) + min};


function esperarAi(msg,tempo){
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject('Mensagem precisa ser uma string');
            return;
        }
        setTimeout(() => {;
        resolve(msg.toUpperCase()+' - passei na promise');
    }, tempo);})};

    //promises.all
    promises = [
        //'primeiro valor',
        esperarAi('promise 1', 3000),
        esperarAi('promise 2', 5000),
        esperarAi('promise 3', 1000),
        //esperarAi(2, 2000),
        //'outro valor'
    ]
    Promise.all(promises).then((valor) => {
        console.log(valor);
    }).catch((e) => {
        console.log('Erro:', e);
    });

    //promises.race
    Promise.race(promises).then((valor) => {
        console.log(valor);
    }).catch((e) => {
        console.log('Erro:', e);
    })
    //promise.resolve
    function baixarPagina() {
        const emCache = true;
        if(emCache){
            return Promise.resolve('Página baixada do cache');
        }else{
            esperarAi('Baixando página', 2000)
        }
    }
    baixarPagina().then((valor) => {
        console.log(valor);
    }).catch((e) => {
        console.log('Erro:', e);
    });
    //promise.reject e a mesma coisa so que cai no catch ao inves do then e troca o resolve por reject