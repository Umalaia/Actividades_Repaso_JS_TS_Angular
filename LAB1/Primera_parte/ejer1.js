/*Realiza una función en JavaScript que reciba un array de 10 números y calcule la media aritmética. 
Los números deben de estar comprendidos entre el 0 y 100, 
si se detectará algún número fuera de ese rango no se tendría en cuenta para su cálculo. */

let array = [10,20,30,40,500,60,80,700,90,10]

function calcularMedia(){
    let contador = 0
    let acumulador = 0
    for(let num of array){
        if(num>=0 && num<=100){
            contador+=num
            acumulador++
        }
    }let rdo = contador/acumulador
    return rdo
}

let media = calcularMedia(array)
console.log(media)




let array2 = [10,20,35,40,500,66,80,700,90,30]

function calcularMedia(array2){
    let contador = 0
    let acumulador = 0
    for(let num of array2){
        if(num>=0 && num<=100){
            contador+=num
            acumulador++
        }
    }let rdo = contador/acumulador
    console.log(rdo)
}

calcularMedia(array2)

