class Empleado{
    constructor( private _id:number, private _localidad:string){
    
    }

    public set id (value : number){
        this._id = value;
    }

    public get id() : number{
        return this._id;
    }

    public set localidad(value : string){
        this._localidad = value;
    }

    public get localidad():string{
        return this._localidad
    }

    toString(): string {
        return `Empleado { ID: ${this._id}, Localidad: ${this._localidad} }`;
    }
}

class Persona{
    constructor(public nombre:string,public edad:number,public empleado:Empleado){
        this.nombre = nombre
        this.edad = edad
        this.empleado = empleado
    }

    toString(): string {
        return `Persona { Nombre: ${this.nombre}, Edad: ${this.edad}, Empleado: ${this.empleado.toString()} }`;
    }
}

let empleado1 = new Empleado(1000,"madrid")
let persona1 = new Persona("mamen", 25, empleado1)

console.log(empleado1)
console.log(persona1)