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

// Criar um objeto retângulo com base 10 e altura 20
const retangulo = new Retangulo(10, 20);

// Calcular e imprimir a área do retângulo
const areaDoRetangulo = retangulo.calcularArea();
console.log(`A área do retângulo é ${areaDoRetangulo}`);