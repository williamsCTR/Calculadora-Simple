class Display {
    constructor(display2,display1){
        this.display1 = display1;
        this.display2 = display2;
        this.calculador = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos = {
            sumar: '+',
            dividir: '%',
            multiplicar: 'x',
            restar: '-', 
        }
    }
    
    borrar() {
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValores();
    }

    borrarTodo() {
        this.valorActual = "";
        this.valorAnterior = "";
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

    computar(tipo){
        this.tipoOperacion !== "igual" && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = "";
        this.imprimirValores();
    }

    agregarNumero(numero){
        if(numero === "," && this.valorActual.includes(",")) return
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
        
    }

    imprimirValores(){
        this.display1.textContent = this.valorActual;
        this.display2.textContent =  `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    }

    calcular(){
        const valorAnterior = parseFloat (this.valorAnterior);
        const valorActual = parseFloat (this.valorActual);

        if (isNaN (valorActual) || isNaN (valorAnterior)) return
        this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual);
    }
}