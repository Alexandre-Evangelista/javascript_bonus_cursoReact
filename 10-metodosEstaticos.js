class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 50;
    }

    static ligar() {
        console.log('TV ligada');
    }

    static desligar() {
        console.log('TV desligada');
    }

    aumentarVolume() {
        if (this.volume < 100) {
            this.volume+=10;
            console.log(`Volume: ${this.volume}`);
        } else {
            console.log('Volume máximo atingido');
        }
    }
//metodo de instancia
    diminuirVolume() {
        if (this.volume > 0) {
            this.volume-=5;
            console.log(`Volume: ${this.volume}`);
        } else {
            console.log('Volume mínimo atingido');
        }
    }
    //metodo estatico
    static trocarPilha() {
        console.log('Pilhas trocadas');
    }
}
const controle = new ControleRemoto('Samsung');
ControleRemoto.ligar();
controle.aumentarVolume();
controle.aumentarVolume();
controle.aumentarVolume();
controle.aumentarVolume();      
controle.diminuirVolume();
ControleRemoto.desligar();
console.log(`Controle da TV: ${controle.tv}`);
ControleRemoto.trocarPilha();
//so consigo acessar metodos estaticos pela classe, não pela instancia