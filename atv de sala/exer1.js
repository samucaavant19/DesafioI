class FiguraGeometrica {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }

    area() {
        return 0; // Implemente o cálculo da área aqui
    }
}

// Exemplo de uso:
const retangulo = new FiguraGeometrica(5, 10);
console.log(`A base do retângulo é ${retangulo.base}`);
console.log(`A altura do retângulo é ${retangulo.altura}`);