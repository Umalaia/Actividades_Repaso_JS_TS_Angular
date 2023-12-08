window.onload = cargarDatos;

function cargarDatos() {

    let contenedor = document.getElementById("contenedor")
    let titulo = document.createElement("h1");
    let t1cont = document.createTextNode("FORMULARIO");
    titulo.appendChild(t1cont);
    console.log(t1cont)
    contenedor.appendChild(titulo);

    let form = document.createElement("form")
    form.method = "get"
    form.action = "#"

    contenedor.appendChild(form)

    let dni = document.createElement("label")
    dni.for = "dni"
    let dnicont = document.createTextNode("DNI : ")
    dni.appendChild(dnicont)
    form.appendChild(dni)

    let inputdni = document.createElement("input")
    inputdni.id = "dni"
    inputdni.name = "dni"
    inputdni.type = "text"
    form.appendChild(inputdni)


    let pizza = document.createElement("label")
    pizza.for = "pizza"
    let pizzacont = document.createTextNode("Elige tu tamaño de pizza : ")
    pizza.appendChild(pizzacont)
    form.appendChild(pizza)

    let pizzas = [{
            nombre: "peque",
            valor: 5
        },
        {
            nombre: "mediana",
            valor: 10
        },
        {
            nombre: "grande",
            valor: 15
        }
    ]

    for (pizza of pizzas) {
        let lpizza = document.createElement("label")
        lpizza.id = pizza.nombre
        let cpizza = document.createTextNode(pizza.nombre)
        lpizza.appendChild(cpizza)
        form.appendChild(lpizza)
        let ipizza = document.createElement("input")
        ipizza.type = "radio"
        ipizza.name = "tamanio"
        ipizza.value = pizza.valor
        ipizza.id = pizza.nombre
        form.appendChild(ipizza)
    }


    /** 
        let peque = document.createElement("label")
        peque.id = "peq"
        let cpeq = document.createTextNode("Pequeña")
        peque.appendChild(cpeq)
        form.appendChild(peque)

        let inputpizza = document.createElement("input")
        inputpizza.type = "radio"
        inputpizza.name = "tamanio"
        inputpizza.value = cpeq.value
        form.appendChild(inputpizza)

        let medi = document.createElement("label")
        medi.id = "med"
        let cmed = document.createTextNode("Mediana")
        medi.appendChild(cmed)
        form.appendChild(medi)

        let inputpizza2 = document.createElement("input")
        inputpizza2.type = "radio"
        inputpizza2.name = "tamanio"
        inputpizza2.value = cmed.value
        medi.appendChild(inputpizza2)

        let gran = document.createElement("label")
        gran.id = "gra"
        let cgra = document.createTextNode("Grande")
        gran.appendChild(cgra)
        form.appendChild(gran)

        let inputpizza3 = document.createElement("input")
        inputpizza3.type = "radio"
        inputpizza3.name = "tamanio"
        inputpizza3.value = cgra.value
        gran.appendChild(inputpizza3)

    */

    let ingredientes = document.createElement("label")
    let icont = document.createTextNode("Ingredientes: ")
    ingredientes.appendChild(icont)
    form.appendChild(ingredientes)

    let ingrediente = [{
            nombre: "bacon",
            valor: "1"
        },
        {
            nombre: "pollo",
            valor: "1"
        },
        {
            nombre: "carne",
            valor: "1"
        }
    ]

    for (checks of ingrediente) {
        let labelingre = document.createElement("label")
        labelingre.for = checks.nombre
        let cli = document.createTextNode(checks.nombre)
        labelingre.appendChild(cli)
        ingredientes.appendChild(labelingre)
        let inputingre = document.createElement("input")
        inputingre.type = "checkbox"
        inputingre.name = "ingred"
        inputingre.value = checks.valor
        inputingre.id = checks.nombre
        ingredientes.appendChild(inputingre)
    }

    let xtra = document.createElement("label")
    let xcont = document.createTextNode("Extras: ")
    xtra.appendChild(xcont)
    form.appendChild(xtra)

    let extras = [{
            nombre: "tomate",
            valor: "1"
        },
        {
            nombre: "cebolla",
            valor: "2"
        },
        {
            nombre: "queso",
            valor: "3"
        }
    ]

    for (extra of extras) {
        let labex = document.createElement("label")
        labex.for = extra.nombre
        let cex = document.createTextNode(extra.nombre)
        labex.appendChild(cex)
        xtra.appendChild(labex)
        let inputextra = document.createElement("input")
        inputextra.type = "checkbox"
        inputextra.name = "extra"
        inputextra.id = extra.nombre
        inputextra.value = extra.valor
        xtra.appendChild(inputextra)
    }



let select = document.createElement("select")
select.for="dias"
form.appendChild(select)

let option = document.createElement("option")
let copt = document.createTextNode("Lunes")
option.appendChild(copt)
select.appendChild(option)
let option2 = document.createElement("option")
let copt2 = document.createTextNode("Martes")
option2.appendChild(copt2)
select.appendChild(option2)

}



function tamanio() {
    let contador = 0
    console.log(contador)
    if (document.getElementById("peque").checked) {
        let contador = 5
        alert(" El valor es : " + contador)
    } else
    if (document.getElementById("mediana").checked) {
        let contador = 10
        alert(" El valor es : " + contador)
    } else
    if (document.getElementById("grande").checked) {
        let contador = 15
        alert(" El valor es : " + contador)
    }

}







function procesarPedido() {
    tamanio()
}


/**
 * 
 * var ingred = document.getElementsByName("ingred").checked
    var tam = document.getElementsByName("tamanio").checked

    if (tam == false) {
        if (ingred == false) {
            tamanio()
        }
    }
 * 
 * 
    for(ingr of ingred){
        if(ingr.checked == false){
            alert("Debe de seleccionar un ingrediente" + ingr.nombre)
            return false  
        }else
            return true
    }

*/