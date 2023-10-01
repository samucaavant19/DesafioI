class FiguraGeometrica {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }
}

class Circulo extends FiguraGeometrica {
    constructor(raio) {
        super(); // Não é necessário chamar super() com base e altura, pois o círculo não as utiliza.
        this.raio = raio;
    }

    calcularArea() {
        return Math.PI * Math.pow(this.raio, 2);
    }
}

// Exemplo de uso:
const circulo = new Circulo(5);
console.log(`O raio do círculo é ${circulo.raio}`);
console.log(`A área do círculo é ${circulo.calcularArea()}`);