class garaje {
    #metros
    #plazas
    tipo

    constructor(metros, plazas, tipo) {
        this.#metros = metros;
        this.#plazas = plazas;
        this.tipo = tipo;
    }

    set metros(value) {
        this.#metros = value
    }

    get metros() {
        return this.#metros
    }

    set plazas(value){
        this.#plazas = value
    }

    get plazas(){
        return this.#plazas
    }
}

class casa{
    plantas
    habitaciones
    baños
    superficie
    garaje

constructor(plantas,habitaciones,baños,superficie, garaje){
    this.plantas = plantas
    this.habitaciones = habitaciones
    this.baños = baños
    this.superficie = superficie
    this. garaje = garaje
}

}

let garaje1 = new garaje(60,2,"cubierto")
let casa1 = new casa(4,3,2,200,garaje1);

console.log(garaje1)
console.log(casa1)