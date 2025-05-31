    class Pessoa{
        constructor(nome, idade){
            this.nome = nome;
            this.idade = idade;
        }
         dizerOi() {
            console.log(`Oi, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
        }
    }
    const p1 = new Pessoa('João', 30);
    const p2 = new Pessoa('Maria', 25);
    const p3 = new Pessoa('Alexandre', 25);
    p1.dizerOi();
    p2.dizerOi();
    p3.dizerOi();
        