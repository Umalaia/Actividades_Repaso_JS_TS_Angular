
function enviarPeticionAsincrona(){
    let xmlhttp = new XMLHttpRequest

    xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4){
            if(this.status == 200){
                procesarRespuesta(this.responseText)
            }else
            alert("error")
        }
    }
    xmlhttp.open('GET', 'ajax.json', true)
    xmlhttp.send(null)
}

function procesarRespuesta(mensaje){
    var objetoJson = JSON.parse(mensaje)
    console.log(objetoJson)
    datosTamaños(objetoJson.tamaños)
    datosIngredientes(objetoJson.ingredientes)
}

function datosTamaños(tamaños){
    let contenedor = document.getElementById("contenedor")
    let labeltama = document.createElement("label")
    labeltama.for = "tamanios"
    let conttam = document.createTextNode("Elige tu tamaño : ")
    labeltama.appendChild(conttam)
    contenedor.appendChild(labeltama)

    for(let tamaño of tamaños){
        let ltam = document.createElement("label")
        let ctam = document.createTextNode(tamaño.nombre)
        ltam.appendChild(ctam)
        contenedor.appendChild(ltam)
        let itam = document.createElement("input")
        itam.type="radio"
        itam.value = tamaño.precio
        itam.name = "tamaños"
        itam.id = tamaño.nombre
        contenedor.appendChild(itam)
    }
}

function datosIngredientes(ingredientes){
    let br = document.createElement("br")
    contenedor.appendChild(br)
    let labelingre = document.createElement("label")
    labelingre.for="ingredientes"
    let contingre = document.createTextNode("Elige al menos un ingrediente :")
    labelingre.appendChild(contingre)
    contenedor.appendChild(labelingre)

    for(let ingre of ingredientes){
        let ling = document.createElement("label")
        let cing = document.createTextNode(ingre.nombre)
        ling.appendChild(cing)
        contenedor.appendChild(ling)
        let iingr = document.createElement("input")
        iingr.type="checkbox"
        iingr.name="ingredientes"
        iingr.id= ingre.nombre
        iingr.value= ingre.precio
        contenedor.appendChild(iingr)
    }
}



function calcularPrecio(){
    let precio = 0;
    let tamaños = document.getElementsByName("tamaños")
    for(tamaño of tamaños){
        if(tamaño.checked){
            precio = parseInt(tamaño.value)
            break;
        }
    }

    let ingredientes = document.getElementsByName("ingredientes")
    for(ingrediente of ingredientes){
        if(ingrediente.checked){
            precio += parseInt(ingrediente.value)
        }
    }

    let hPrecio = document.createElement("h4")
    let tPrecio = document.createTextNode("Precio: " + precio)
    hPrecio.appendChild(tPrecio)

    precioPizza.innerHTML = ""
    precioPizza.appendChild(hPrecio)
}




window.onload = function(){
    enviarPeticionAsincrona()
    pedir.onclick = calcularPrecio
}


