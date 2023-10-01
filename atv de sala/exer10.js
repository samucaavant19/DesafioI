class Animal {
    constructor(nome, especie) {
        this.nome = nome;
        this.especie = especie;
    }
}

class Gato extends Animal {
    constructor(nome) {
        super(nome, "Gato");
    }

    miar() {
        console.log(`${this.nome} está miando: Miau, miau!`);
    }
}

// Criar um objeto Gato com nome "Miau"
const gatoMiau = new Gato("Miau");

// Imprimir o som do gato miando
gatoMiau.miar();