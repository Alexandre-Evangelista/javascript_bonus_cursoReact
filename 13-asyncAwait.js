async function falar(msg, tempo) {
    await new Promise(resolve => {
        setTimeout(() => {
            console.log(msg);
            resolve();
        }, tempo);
    });
}
 falar('Como você está?',2000);
 falar('Espero que esteja bem!',3000);
falar('Olá, mundo!',1000);