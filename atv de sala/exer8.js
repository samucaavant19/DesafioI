class Animal {
    constructor(nome, especie) {
        this.nome = nome;
        this.especie = especie;
    }
}

class Gato extends Animal {
    constructor(nome, cor) {
        super(nome, "Gato");
        this.cor = cor;
    }

    miar() {
        console.log(`${this.nome} está miando: Miau, miau!`);
    }
}

// Exemplo de uso:
const meuGato = new Gato("Whiskers", "Cinza");
console.log(`Nome do gato: ${meuGato.nome}`);
console.log(`Espécie do gato: ${meuGato.especie}`);
console.log(`Cor do gato: ${meuGato.cor}`);
meuGato.miar(); // Chama o método miar()






