
class Motor{
    tipoMotor
    cv
    consumo

constructor(tipoMotor,cv,consumo){
    this.tipoMotor = tipoMotor
    this.cv = cv
    this.consumo = consumo

}
}


class Coche{
    marca
    modelo
    matricula
    motor


constructor(marca,modelo,matricula,motor){
    this.marca = marca
    this.modelo = modelo
    this.matricula = matricula
    this.motor = motor
}
}


let motor1 = new Motor("Diesel", 95, 20);
let coche1 = new Coche("BMW", "360", "5428JKM",motor1);

console.log(motor1)
console.log(coche1)
