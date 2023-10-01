class Animal {
    constructor(nome, especie) {
        this.nome = nome;
        this.especie = especie;
    }
}

// Exemplo de uso:
const meuAnimal = new Animal("Rex", "Cachorro");
console.log(`Nome do animal: ${meuAnimal.nome}`);
console.log(`Espécie do animal: ${meuAnimal.especie}`);