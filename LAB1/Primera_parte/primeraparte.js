var arrayNums = [10,20,45,68,102,403,1,8,79,13]

function mediaAritmetica(arrayNums){
    let acumulador = 0
    let contador = 0

for(let i of arrayNums){
    if(i<=100 && i>= 0){
        contador+=i
        acumulador++
    }
}
let media = contador/acumulador
return media

}

let media = mediaAritmetica(arrayNums)
console.log(media)






