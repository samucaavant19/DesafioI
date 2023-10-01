class Animal {
    constructor(nome, especie) {
        this.nome = nome;
        this.especie = especie;
    }
}

class Cachorro extends Animal {
    constructor(nome, raca) {
        super(nome, "Cachorro");
        this.raca = raca;
    }

    latir() {
        console.log(`${this.nome} está latindo: Woof, woof!`);
    }
}

// Exemplo de uso:
const meuCachorro = new Cachorro("Rex", "Labrador");
console.log(`Nome do cachorro: ${meuCachorro.nome}`);
console.log(`Espécie do cachorro: ${meuCachorro.especie}`);
console.log(`Raça do cachorro: ${meuCachorro.raca}`);
meuCachorro.latir(); // Chama o método latir()