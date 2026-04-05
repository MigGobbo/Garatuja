export

class Triangulo {
  private lado1: number;
  private lado2: number;
  private lado3: number;

  constructor(lado1: number, lado2: number, lado3: number) {
    this.lado1 = lado1;
    this.lado2 = lado2;
    this.lado3 = lado3;
  }
  
  calcularPerimetro(): number {
    return this.lado1 + this.lado2 + this.lado3;
  }

  calcularArea(): number {
    const area = this.calcularPerimetro() / 2;
    return area;
}

calcularTipo(): string {
  if (this.lado1 === this.lado2 && this.lado2 === this.lado3) {
    return "Equilátero";
  } else if (this.lado1 === this.lado2 || this.lado2 === this.lado3 || this.lado1 === this.lado3) {
    return "Isósceles";
  } else {
    return "Escaleno";
  }
}
}

const triangulo1 = new Triangulo(3, 4, 5);
console.log("Perímetro:", triangulo1.calcularPerimetro());
console.log("Área:", triangulo1.calcularArea());
console.log("Tipo:", triangulo1.calcularTipo());

// é nois professor daniel, tamo junto!