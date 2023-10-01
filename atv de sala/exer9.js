class Animal {
    constructor(nome, especie) {
        this.nome = nome;
        this.especie = especie;
    }
}

class Cachorro extends Animal {
    constructor(nome) {
        super(nome, "Cachorro");
    }

    latir() {
        console.log(`${this.nome} está latindo: Woof, woof!`);
    }
}

// Criar um objeto Cachorro com nome "ToTó"
const cachorroToTo = new Cachorro("ToTó");

// Imprimir o som do cachorro latindo
cachorroToTo.latir();