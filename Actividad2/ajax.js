
function pedirDatosPizzeria(){
    let xmlHttp = new XMLHttpRequest
    console.log("entrando pedirDatos")

    xmlHttp.onreadystatechange = function(){
        if(this.readyState == 4){
            if(this.status == 200){
                procesarRespuesta(this.responseText)
            }else{
                alert("Error")
            }
        }
    }
    xmlHttp.open('GET', 'ajax.json', true)
    xmlHttp.send(null)

    console.log("saliendo pedirDatos")
}

function procesarRespuesta(mensaje){

    var pizzeria = JSON.parse(mensaje)

    console.log(pizzeria.tamaños)
    console.log(pizzeria.ingredientes)

    for(let tamaño of tamaños){
        console.log(tamaño)
    }
}




