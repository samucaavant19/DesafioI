class FiguraGeometrica {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }
}

class Retangulo extends FiguraGeometrica {
    constructor(base, altura) {
        super(base, altura);
    }

    calcularArea() {
        return this.base * this.altura;
    }
}

// Exemplo de uso:
const retangulo = new Retangulo(5, 10);
console.log(`A base do retângulo é ${retangulo.base}`);
console.log(`A altura do retângulo é ${retangulo.altura}`);
console.log(`A área do retângulo é ${retangulo.calcularArea()}`);